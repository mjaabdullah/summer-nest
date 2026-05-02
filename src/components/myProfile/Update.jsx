"use client";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

const UpdateForm = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      userData[key] = value.toString();
    });

    // const { data, error } = await authClient.signIn.email({
    //   ...userData,
    //   callbackURL: "/",
    // });
    // alert(error.message);
  };

  return (
    <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
      <TextField
        isRequired
        name="name"
        type="text"
        validate={(value) => {
          if (value.length < 3) {
            return "Name must be at least 3 characters";
          }
          return null;
        }}
      >
        <Label>Name</Label>
        <Input placeholder="Enter your name" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        name="image"
        type="url"
        validate={(value) => {
          if (value.length < 10) {
            return "Photo URL must be at least 10 characters";
          }
          return null;
        }}
      >
        <Label>Enter your photo URL</Label>
        <Input placeholder="Enter your photo URL" />
        <FieldError />
      </TextField>

      <div className="">
        <Button
          fullWidth
          type="submit"
          className={`bg-linear-to-br from-orange-600 to-orange-400 text-lg`}
        >
          Update Information
        </Button>
      </div>
    </Form>
  );
};

export default UpdateForm;
