import { redirect, RedirectType } from "next/navigation";

const Redirect = () => redirect("/profile", RedirectType.push);

export default Redirect;
