import { Component } from "react";
import SearcBar from "components/Searchbar/Searchbar";
import { AppStyle } from "./App.styled";
import ImageGallery from "components/ImageGallery/ImageGallery";
// import { fetchImg } from "components/Api/Api";
import Button from "components/Button/Button";
import axios from "axios";
import Loader from "components/Loader/Loader";
import ModalPic from "components/Modal/Modal";


const KEY = "29175258-0e972b66084e1db5719a62740"

export class App extends Component {
  state = {
    picture: [],
    isLoading: false,
    error: null,
    page: 1,
    search: "",
    showModal: false,
    imgURL: "",
  };
  
  fetchImg = async () => {
    const { search, page } = this.state;
    const response = await axios.get(`https://pixabay.com/api/?q=${search}&page=${page}
    &key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data;
};

   componentDidMount() {
     window.addEventListener("keydown", this.hadndleKeyDown);
  
    
  };

  componentWillUnmount() {
    window.removeEventListener("keydown", this.hadndleKeyDown);
  };

  async componentDidUpdate(_, prevState) {
    const { fetchImg, } = this;
    const { page, search, } = this.state;
    if (prevState.search !== search) {
      this.setState({ picture: [] });
    };
    
    if (prevState.page !== page || 
      prevState.search !== search) {
      try {
     this.setState({isLoading: true})
        const data = await fetchImg(page, search).then(data => data.hits)
        this.setState(({picture} ) => {
          return {
          
            picture: [...picture, ...data]
          };
      });
   } catch (error) {
    console.log(error)
   } finally {
     this.setState({isLoading:false})
      };
   
    };
  };

  hadndleKeyDown = e => {
    if (e.code === "Escape") {
      this.setState({ showModal: false })
    };
  };
// async fetchPictures() {
//     const { search, page } = this.state;
//     this.setState({ isLoading: true });
//     try {
//       this.setState({ isLoading: true });
//       const data = await fetchImg(search, page).then(data => data.hits);
//       this.setState(({ picture }) => {
//         return{
//           picture: [...picture, ...data]
//         }
//       });
//     } catch (error) {
//       this.setState({error})
//     } finally {
//       this.setState({isLoading: false})
//     }
//   };

  onSearch = (text) => {
    const {name} = text
   this.setState({search: name})
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }));
  };

  

  toggleModal = (e) => {
    if (e.target.nodeName === "IMG") {
      this.setState(({ showModal }) => ({
        showModal: !showModal
      }));
    };
   };
  
  getModalContent(img) {
    return {
      img
   }
  
  };

 
  render() {
    const { picture, isLoading, error, showModal, imgURL } = this.state;
    const { loadMore, onSearch, toggleModal, getModalContent } = this
    console.log(imgURL)
    return (
      <AppStyle   onClick={toggleModal}>
        {showModal && <ModalPic><img src={getModalContent()} alt=""/></ModalPic>}
        {error && (<p>UPS</p>)}
        <SearcBar onSearch={onSearch}  />
        {isLoading ? 
          <Loader /> : <ImageGallery pictures={picture} getModalPic={getModalContent} />}
        <Button onClick={loadMore} />
    </AppStyle>
  );
 }
};
// largeImageURL