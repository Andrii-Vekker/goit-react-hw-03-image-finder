import { Component } from "react";
import SearcBar from "components/Searchbar/Searchbar";
import { AppStyle } from "./App.styled";
import ImageGallery from "components/ImageGallery/ImageGallery";


export class App extends Component {
  render() {
    return (
    <AppStyle>
        <SearcBar />
        <ImageGallery />
    </AppStyle>
  );
 }
};
