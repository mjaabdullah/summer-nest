"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const ProfileCard = () => {
  const { data, error } = authClient.useSession();
  const { name, email, image } = data?.user || {};

  return (
    <div className="max-w-100 mx-auto my-10 bg-orange-50/50 rounded-lg shadow-sm flex flex-col items-center p-6 py-10 space-y-3">
      <div className="w-40 h-40 rounded-full overflow-hidden relative  ring-2 ring-orange-500">
        <Image src={image} alt={name} fill />
      </div>
      <div className="flex flex-col items-center gap-1">
        {" "}
        <h2 className="text-2xl md:text-4xl font-bold mt-4">{name}</h2>
        <p className="text-gray-600 text-xl">{email}</p>
      </div>
      <Link className="w-full" href={`/my-profile/update`}>
        <Button
          fullWidth
          className={`bg-linear-to-br from-orange-600 to-orange-400 text-lg`}
        >
          Update Profile
        </Button>
      </Link>
    </div>
  );
};

export default ProfileCard;
