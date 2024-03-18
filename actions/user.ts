"use server";

import axios from "axios";

interface Params {
  page: number;
}

export async function all({ page }: Params) {
  try {
    const response: any = await axios.get(
      `https://beta.getdexterapp.com/api/test?page=${page}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return { error: "Server error please try again later." };
  }
  //   redirect("/dashboard");
}
