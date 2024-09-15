import React, { ChangeEvent, Fragment, useState } from 'react';
import TextField from '@mui/material/TextField';

const Contacts = ({
  basicTabs,
  onChangeHandler,
}: {
  basicTabs: any;
  onChangeHandler: (value: any, key: string) => void;
}) => {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string; // Base64 encoded image
        onChangeHandler(base64Image, 'image'); // Update the image field in basicTabs
      };
      reader.readAsDataURL(file); // Read the file as Data URL
    }
  };

  return (
    <Fragment>
      {/* Name Input */}
      <TextField
        label="Name"
        variant="filled"
        value={basicTabs.name || ''}
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
        value={basicTabs.label || ''}
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
        value={basicTabs.email || ''}
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
        value={basicTabs.url || ''}
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
        value={basicTabs.phone || ''}
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
        value={basicTabs.location?.city || ''}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const location = { ...basicTabs.location, city: event.target.value };
          onChangeHandler(location, 'location');
        }}
        fullWidth
        margin="normal"
      />

      {/* Relevant Experience Input */}
      <TextField
        label="Relevant Experience"
        variant="filled"
        value={basicTabs.relExp || ''}
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
        value={basicTabs.totalExp || ''}
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
