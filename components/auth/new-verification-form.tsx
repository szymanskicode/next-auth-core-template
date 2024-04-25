"use client";

import React, { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";

import { newVerification } from "@/actions/new-verification";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

let initialRender = true;

export const NewVerificationForm: React.FC = () => {
  const searchParams = useSearchParams();

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    initialRender = false;

    if (!token) return setError("Missing token!");

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch((error: any) => {
        console.error(error);
        setError("Something went wrong!");
      });
  }, [token]);

  useEffect(() => {
    if (!initialRender) return; // Prevent strict mode rerender

    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification" //
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className=" flex items-center w-wfull justify-center">
        {!error && !success && <BeatLoader />}
        <FormSuccess message={success} />
        <FormError message={error} />
      </div>
    </CardWrapper>
  );
};
