import { Component } from "react";
import SearcBar from "components/Searchbar/Searchbar";
import { AppStyle } from "./App.styled";
import ImageGallery from "components/ImageGallery/ImageGallery";
import Button from "components/Button/Button";
import axios from "axios";
import Loader from "components/Loader/Loader";
import ModalPic from "components/Modal/Modal";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const KEY = "29175258-0e972b66084e1db5719a62740"
const perPage = "12"
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
    &key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`);
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
       
    if (prevState.page !== page || 
      prevState.search !== search) {
      try {      
        this.setState({isLoading: true})
        const data = await fetchImg(page, search).then(data => data.hits)
        this.setState(({ picture }) => {
          
          return {
          
            picture: [...picture, ...data]
          };
      });
   } catch (error) {
     toast.error("Error loading. Try again")
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

  onSearch = (text) => {
    const { name } = text
    const { search } = this.state
    if (search !== name) {
      this.setState({ search: name, picture: [], page: 1 });
    };
  };
 
  loadMore = (e) => {
    e.preventDefault()
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
  
  close = () => {
    this.setState({showModal: false})
  }
  
  getModalContent = (img) => {
     this.setState({imgURL: img})
  };

   render() {
    const { picture, isLoading, error, showModal, imgURL } = this.state;
     const { loadMore, onSearch, toggleModal, getModalContent, close } = this
     const btnCondition = !isLoading && picture.length > 0
     
    return (
      <AppStyle onClick={toggleModal}>
 <ToastContainer />
        {showModal && <ModalPic closeModal={close}><img src={imgURL} alt=""/></ModalPic>}
        {error && (<p>UPS</p>)}
        <SearcBar onSearch={onSearch}  />
        {isLoading && <Loader />}
        {picture.length > 0 &&   <ImageGallery pictures={picture} getModalPic={getModalContent}/>}
        {btnCondition && <Button onClick={loadMore} />}
    </AppStyle>
  );
  };
};





