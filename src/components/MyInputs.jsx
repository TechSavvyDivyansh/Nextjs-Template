import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MyInputs({ label, type, placeholder, register, name, errors, options, control }) {
  return (
    <div className="flex flex-col space-y-1">
      {label && <label className="text-white">{label}</label>}

      {/* Handling different input types */}
      {type === "text" || type === "email" || type === "password" || type === "number" || type === "tel" ? (
        <Input type={type} placeholder={placeholder} {...register(name)} />
      ) : type === "select" ? (
        // Automatically use Controller for Select fields
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {options?.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      ) : type === "file" ? (
        <input type="file" {...register(name)} className="border p-2 rounded-lg text-white" />
      ) : (
        <p className="text-red-500">Invalid input type</p>
      )}

      {errors && <p className="text-red-500">{errors.message}</p>}
    </div>
  );
}
