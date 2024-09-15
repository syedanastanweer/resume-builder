import React, { ChangeEvent, Fragment } from 'react';
import TextField from '@mui/material/TextField';

type BasicTabs = {
  name?: string;
  image?: string;
  label?: string;
  email?: string;
  url?: string;
  phone?: string;
  location?: {
    city?: string;
  };
  relExp?: string;
  totalExp?: string;
};

type ContactsProps = {
  basicTabs: BasicTabs;
  onChangeHandler: (value: any, key: string) => void;
};

const Contacts = ({ basicTabs, onChangeHandler }: ContactsProps) => {
  const {
    name = '',
    label = '',
    email = '',
    url = '',
    phone = '',
    location = { city: '' },
    relExp = '',
    totalExp = '',
  } = basicTabs || {}; // Provide default values for destructuring

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        onChangeHandler(base64Image, 'image');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Fragment>
      {/* Name Input */}
      <TextField
        label="Name"
        variant="filled"
        value={name}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChangeHandler(event.target.value, 'name')
        }
        fullWidth
        margin="normal"
      />

      {/* Image file input */}
      <input
        accept="image/png, image/jpeg, image/jpg"
        type="file"
        onChange={handleImageChange}
        style={{ marginTop: '10px' }}
      />

      {/* Title Input */}
      <TextField
        label="Title"
        variant="filled"
        value={label}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChangeHandler(event.target.value, 'label')
        }
        fullWidth
        margin="normal"
      />

      {/* Email Input */}
      <TextField
        label="Email"
        variant="filled"
        value={email}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChangeHandler(event.target.value, 'email')
        }
        fullWidth
        margin="normal"
      />

      {/* Website URL Input */}
      <TextField
        label="Website URL"
        variant="filled"
        value={url}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChangeHandler(event.target.value, 'url')
        }
        fullWidth
        margin="normal"
      />

      {/* Phone Input */}
      <TextField
        label="Phone"
        variant="filled"
        value={phone}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChangeHandler(event.target.value, 'phone')
        }
        fullWidth
        margin="normal"
      />

      {/* Location Input */}
      <TextField
        label="Location"
        variant="filled"
        value={location.city || ''}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const updatedLocation = { ...location, city: event.target.value };
          onChangeHandler(updatedLocation, 'location');
        }}
        fullWidth
        margin="normal"
      />

      {/* Relevant Experience Input */}
      <TextField
        label="Relevant Experience"
        variant="filled"
        value={relExp}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChangeHandler(event.target.value, 'relExp')
        }
        fullWidth
        margin="normal"
      />

      {/* Total Experience Input */}
      <TextField
        label="Total Experience"
        variant="filled"
        value={totalExp}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChangeHandler(event.target.value, 'totalExp')
        }
        fullWidth
        margin="normal"
      />
    </Fragment>
  );
};

export default Contacts;
