import { Component } from "react";
import SearcBar from "components/Searchbar/Searchbar";
import { AppStyle } from "./App.styled";
import ImageGallery from "components/ImageGallery/ImageGallery";
import { fetchImg } from "components/Api/Api";




export class App extends Component {
  state = {
    picture: [],
    isLoading: false,
    error: null,
    page: 1
  };

  async componentDidMount() {
   try {
     const picture = await fetchImg();
    this.setState({picture})
   } catch (error) {
    console.log(error)
    };
    
  };

 
  render() {
    const {picture, page} = this.state
    return (
    <AppStyle>
        <SearcBar onFetch={this.fetchImg} page={page} />
        <ImageGallery pictures={picture} />
    </AppStyle>
  );
 }
};
