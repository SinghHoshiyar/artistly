'use client';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import categories from "@/data/categories.json";
import languages from "@/data/languages.json";
import { useState } from "react";

// Type-safe form values
interface ArtistFormValues {
  name: string;
  bio: string;
  categories: string[];
  languages: string[];
  fee: string;
  location: string;
}

const schema: yup.ObjectSchema<ArtistFormValues> = yup.object({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  categories: yup
    .array()
    .of(yup.string().defined())
    .min(1, "Select at least one category")
    .required()
    .defined(),
  languages: yup
    .array()
    .of(yup.string().defined())
    .min(1, "Select at least one language")
    .required()
    .defined(),
  fee: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
});


export default function ArtistForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ArtistFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      categories: [],
      languages: [],
      fee: "",
      location: "",
    },
  });

  const [profileImage, setProfileImage] = useState<File | null>(null);

  const onSubmit = (data: ArtistFormValues) => {
    const finalData = {
      ...data,
      profileImage: profileImage?.name || "None",
    };
    console.log("Submitted Form Data:", finalData);
    alert("Form submitted! Check console.");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto px-6 py-10 bg-white rounded shadow space-y-6"
    >
      <h2 className="text-2xl font-bold mb-4">Artist Onboarding</h2>

      <div>
        <label className="block font-medium">Name *</label>
        <input {...register("name")} className="w-full border p-2 rounded" />
        <p className="text-red-600 text-sm">{errors.name?.message}</p>
      </div>

      <div>
        <label className="block font-medium">Bio *</label>
        <textarea {...register("bio")} rows={4} className="w-full border p-2 rounded" />
        <p className="text-red-600 text-sm">{errors.bio?.message}</p>
      </div>

      <div>
        <label className="block font-medium mb-2">Categories *</label>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2">
              <input type="checkbox" value={cat.title} {...register("categories")} />
              {cat.title}
            </label>
          ))}
        </div>
        <p className="text-red-600 text-sm">{errors.categories?.message}</p>
      </div>

      <div>
        <label className="block font-medium mb-2">Languages Spoken *</label>
        <div className="grid grid-cols-2 gap-2">
          {languages.map((lang) => (
            <label key={lang} className="flex items-center gap-2">
              <input type="checkbox" value={lang} {...register("languages")} />
              {lang}
            </label>
          ))}
        </div>
        <p className="text-red-600 text-sm">{errors.languages?.message}</p>
      </div>

      <div>
        <label className="block font-medium">Fee Range *</label>
        <select {...register("fee")} className="w-full border p-2 rounded">
          <option value="">Select Fee Range</option>
          <option>₹5,000 - ₹10,000</option>
          <option>₹10,000 - ₹20,000</option>
          <option>₹20,000+</option>
        </select>
        <p className="text-red-600 text-sm">{errors.fee?.message}</p>
      </div>

      <div>
        <label className="block font-medium">Location *</label>
        <input {...register("location")} className="w-full border p-2 rounded" />
        <p className="text-red-600 text-sm">{errors.location?.message}</p>
      </div>

      <div>
        <label className="block font-medium">Profile Image (optional)</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProfileImage(e.target.files?.[0] || null)}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Submit Artist
      </button>
    </form>
  );
}
