import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";

type Props = {};

function AuthForm() {
  return (
    <section className="fixed bottom-0 left-0 w-full bg-white p-5 rounded-t-3xl">
      <form id="login-form" className="p-5 flex flex-col gap-4">
        <InputGroup className="py-5">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
      </form>
    </section>
  );
}

export default AuthForm;
