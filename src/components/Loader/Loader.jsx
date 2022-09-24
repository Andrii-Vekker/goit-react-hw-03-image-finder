import { ColorRing } from  'react-loader-spinner'


export default function Loader() {
    return (
     <ColorRing
  visible={true}
  height="150"
  width="150"
  ariaLabel="blocks-loading"
  wrapperStyle={{position:"absolute", top:"50%", left:"50%"}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
    );
};

