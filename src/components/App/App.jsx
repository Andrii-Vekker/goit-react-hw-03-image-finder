import { Component } from "react";
import SearcBar from "components/Searchbar/Searchbar";
import { AppStyle } from "./App.styled";
import ImageGallery from "components/ImageGallery/ImageGallery";
// import { fetchImg } from "components/Api/Api";
import Button from "components/Button/Button";
import axios from "axios";
import Loader from "components/Loader/Loader";


const KEY = "29175258-0e972b66084e1db5719a62740"

export class App extends Component {
  state = {
    picture: [],
    isLoading: false,
    error: null,
    page: 1,
    search: ""
  };
  fetchImg = async () => {
    const { search, page } = this.state
    const response = await axios.get(`https://pixabay.com/api/?q=${search}&page=${page}
    &key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data
};

  // async componentDidMount() {
  //   const { search } = this.state
  
  // //   const { fetchImg } = this
    
  // //   try {
  // //     this.setState({ isLoading: true })
     
  // //     const picture = await fetchImg().then(data => data.hits)
  // //   this.setState({picture})
  // //  } catch (error) {
  // //   console.log(error)
  // //  } finally {
  // //    this.setState({isLoading:false})
  // //   }
    
  // };

  async componentDidUpdate(_, prevState) {
     const {fetchImg} = this
    const { page, search, picture } = this.state
    if (prevState.search !== search) {
      this.setState({picture:[]})
    }
    
    if (prevState.page !== page || 
      prevState.search !== search) {
      try {
     this.setState({isLoading: true})
        const data = await fetchImg(page, search).then(data => data.hits)
        this.setState(({picture} ) => {
           return {
          
          picture: [...picture, ...data]
        }
      });
   } catch (error) {
    console.log(error)
   } finally {
     this.setState({isLoading:false})
    }
   
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

   render() {
    const { picture, isLoading, error } = this.state;
    const {loadMore, onSearch} = this
    return (
      <AppStyle>
        {error && (<p>UPS</p>)}
        <SearcBar onSearch={onSearch}  />
        {isLoading ? 
        <Loader/> : <ImageGallery pictures={picture} />}
        <Button onClick={loadMore} />
    </AppStyle>
  );
 }
};
