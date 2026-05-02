"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterForm = () => {
  const router = useRouter();
  const [showPassword, SetShowPassword] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = {};

    formData.forEach((value, key) => {
      userData[key] = value.toString();
    });

    const { data, error } = await authClient.signUp.email(
      {
        ...userData,
      },
      {
        onRequest: (ctx) => {
          //show loading
        },
        onSuccess: (ctx) => {
          alert("Account Created!");
          router.push("/");
        },
        onError: (ctx) => {
          // display the error message
          alert(ctx.error.message);
        },
      },
    );
  };

  return (
    <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
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
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="Enter your email" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        type={showPassword ? "text" : "password"}
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }

          return null;
        }}
        className={`relative`}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <span
          onClick={() => SetShowPassword(!showPassword)}
          className="absolute right-2 cursor-pointer top-8 text-xl text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </span>
        <Description>
          Must be at least 8 characters with 1 uppercase and 1 number
        </Description>
        <FieldError />
      </TextField>

      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Create Account
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
  );
};

export default RegisterForm;
