
import './App.css';
import { Container, Grid, Image, Item, Button } from "semantic-ui-react";
import { useState } from "react";
import imageCompression from "browser-image-compression";
import InputSlider from './slider';

function App() {
  const [origImage, setOrigImage] = useState("");
  const [origImageFile, setorigImageFile] = useState("");
  const [compressImage, setcompressImage] = useState("");
  const [filename, setfilename] = useState("");


  const handle = (e) => {
    const imagefile = e.target.files[0];
    setOrigImage(imagefile);
    setorigImageFile(URL.createObjectURL(imagefile));
    setfilename(imagefile.name);
  };

  const handleCompressImage = (e) => {
    e.preventDefault();

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 500,
      useWebWorker: true,
    };

    if (options.maxSizeMB >= origImage / 1024) {
      alert("Image is too small to compress");
      return 0;
    }
    let output;
    imageCompression(origImage, options).then((x) => {
      output = x;
      const downloadLink = URL.createObjectURL(output);
      setcompressImage(downloadLink);
    })
  }

  function changeFileSize (size) {
    setSize(size);
    console.log(size);
  }

  return (
    <div className="App">
      <Container className="maincon" >
        <Grid>
          <h3>{""}</h3>
          <Grid.Row centered>
            {origImageFile && <InputSlider />}
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>
              <Item  >
                <Container className="imagecontainer"  >
                  {origImageFile ? (
                    <Image src={origImageFile} />
                  ) : (
                    <Image src="data:image/png;base64,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" />
                  )}
                </Container>
                <div className="compress">
                  {/* <Button primary > */}
                  <label class="custom-file-upload" >
                    Custom Upload
                    <input onChange={(e) => handle(e)}
                      type="file" accept="image/*"
                    />
                  </label>
                  {/* </Button> */}
                </div>
              </Item>
            </Grid.Column>
            <Grid.Column className="compress" width={4}>

              <h2></h2>
              {origImageFile && <Button primary onClick={(e) => handleCompressImage(e)} > Compress Image </Button>}

            </Grid.Column>
            <Grid.Column width={6}>
              <Item>
                <Container className="imagecontainer" >
                  {compressImage ? (
                    <Image src={compressImage} />
                  ) : (
                    <Image src="https://icon-library.com/images/download-cloud-icon/download-cloud-icon-10.jpg" />
                  )}
                </Container>

                <div className="compress">
                  {compressImage && 
                    <a className='custom-file-upload' href={compressImage} download={filename} >
                      {" "}
                      Download Image
                    </a>
                  }
                </div>
              </Item>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
export default App;
