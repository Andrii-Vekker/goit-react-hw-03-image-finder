import { Component } from "react";
import SearcBar from "components/Searchbar/Searchbar";
import { AppStyle } from "./App.styled";
import ImageGallery from "components/ImageGallery/ImageGallery";
import axios from "axios";


const KEY = "29175258-0e972b66084e1db5719a62740"

export class App extends Component {
  state = {
    picture: [],
    isLoading: false,
    error: null,
    page: 1
  };

  componentDidMount() {
    
    this.fetchImg()
  };

  fetchImg(text) {
    const {page} = this.state;
    this.setState({
      isLoading: true
    })
    axios.get(`https://pixabay.com/api/?q=cat&page=1&key=29175258-0e972b66084e1db5719a62740&image_type=photo&orientation=horizontal&per_page=12`)
      .then(({ data }) => {
        console.log(data)
        this.setState(({ picture }) => {
          return {
          picture: [...picture, data]
        }
      })
      }).catch(error => {
        this.setState({
        error
      })
    }).finally(() => this.setState({loading: false}))
  };
  // async getImg() {
  //   const {page} = this.state;
  //   try {
  //     const response = await axios.get(`https://pixabay.com/api/?q=dog&page=${page}&key=${KEY}
  //   &image_type=photo&orientation=horizontal&per_page=12`);
  //     console.log(response)
  //     return response
  //   } catch (error) {
      
  //   }
  // }



  render() {
    return (
    <AppStyle>
        <SearcBar onFetch={this.fetchImg} />
        <ImageGallery />
    </AppStyle>
  );
 }
};
