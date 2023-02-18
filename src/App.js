import { useState } from 'react';
import './App.css';
import { Pets } from './ui-components';
import { NavBar } from './ui-components';
import {Footer } from './ui-components';
import {AddPet} from './ui-components';
import {PetDetails} from './ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react';

import { Storage } from "@aws-amplify/storage";


function App({ user, signOut}) {

  async function saveFile() {
    await Storage.put("test.txt", "Hello");
  }
  
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [pet, setPet] = useState();

  const [updatePet, setUpdatePet] = useState();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [about, setAbout] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");

  const formOverride = {

    TextField29766922: {
      placeholder: name
    },
    TextField29766923: {
      placeholder: age
    },
    TextField29766924: {
      placeholder: breed
    },
    TextField36562704: {
      placeholder: about
    },
    TextField36562711: {
      placeholder: color
    },
    TextField36562718: {
      placeholder: image
    },
    image: {
      src: updatePet == null 
      ? "http://clipart-library.com/data_images/50833.jpg"
      : updatePet.image,
    },
    Button36572726:{
      isDisabled : !updatePet ? true: false
    },
    Button29766926: {
      isDisabled: updatePet ? true : false
    },
    Icon: {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowForm(false);
      }
    }
  }
  const navbarOverride = {
    Button: {
      onClick: signOut,
    },    
    image: {
      src: user?.attributes?.profile,
      //src: "https://img.icons8.com/color/50/000000/cat",
    },
    "Add Pet": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        saveFile();
        setShowForm(!showForm);
      }
    },
  };
  return (
    <div className="App">
      <NavBar width={"100%"} overrides={navbarOverride} />
      <header className="App-header">
        {showDetails && <PetDetails 
          pet={pet}
          style={{
            textAlign: "left",
            margin: "1rem"
          }}
          overrides={{
            Close: {
              onClick: () => {
                setShowDetails(false)
              },
              style: {
                cursor: "pointer",
              }
            }
          }}
        />}        
        {showForm && (
          <AddPet 
          pet={updatePet}
            overrides={formOverride}
            style={{
              textAlign: "left",
              margin: "1rem"
            }}
          />
        )}
        
        <Pets 
          overrideItems={({ item, index}) => ({
            overrides: {
              Breed: {color: "blue"},

              Button29766907: {
                onClick: () => {
                  setShowDetails(!showDetails);
                  setPet(item)
                }
              },

              Button36502689: {
                onClick: () => {
                  if (!showForm) setShowForm(true)
                  setUpdatePet(item);
                  setName(item.name);
                  setAge(item.age);
                  setBreed(item.breed);
                  setAbout(item.about);
                  setColor(item.color);
                  setImage(item.image);
                }
              }

            },
          })}
        />
      </header>
      <Footer width={"100%"} />
    </div>
  );
}

export default withAuthenticator(App);
