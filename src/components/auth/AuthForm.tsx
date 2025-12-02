import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { User, Lock, Eye, EyeClosed, Mail, AlertCircle } from "lucide-react";
import { delay, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";

type Props = {
  onClose: () => void;
  changeAuthMode: (mode: "login" | "signup") => void;
  authMode: "login" | "signup";
};

// Form field types
interface AuthFormValues {
  name: string;
  email?: string;
  username?: string;
  password: string;
}

function AuthForm({ onClose, changeAuthMode, authMode }: Props) {
  const [isHidden, setIsHidden] = useState(true);

  const form = useForm<AuthFormValues>({
    defaultValues: {
      name: "",
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: AuthFormValues) => {
    if (authMode === "login") {
      console.log("LOGIN:", values);
      // axios.post("/login", values)
    } else {
      console.log("SIGNUP:", values);
      // axios.post("/register", values)
    }
  };

  const [activeToolTip, setActiveToolTip] = useState<string | null>(null);

  const toggleToolTip = (name: string) => {
    setActiveToolTip(activeToolTip === name ? null : name);
  };

  const hoverVariant = {
    rest: { scale: 1, opacity: 0.8 },
    hover: { scale: 1.05, opacity: 1, transition: { duration: 0.3 } },
  };

  const fadeVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
  };

  return (
    <>
      {/* BACKDROP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* BOTTOM SHEET */}
      <motion.section
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          bounce: 0.15,
        }}
        className="fixed bottom-0 left-0 w-full bg-card rounded-t-3xl h-[70vh] p-5 z-50"
      >
        <Form {...form}>
          <motion.form
            variants={fadeVariant}
            initial="hidden"
            animate="visible"
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-5 flex flex-col gap-6 h-full"
          >
            {/* DRAG HANDLE / CLOSE */}
            <motion.div
              variants={hoverVariant}
              initial="rest"
              whileHover="hover"
              onClick={onClose}
              className="cursor-pointer w-20 h-2 bg-neutral-200 rounded-full mx-auto mb-4"
            />

            {/* TITLE */}
            <h1 className="text-5xl font-bold mb-10">
              {authMode === "login" ? "Sign In" : "Sign Up"}
            </h1>

            {/* NAME */}

            <FormField
              control={form.control}
              name="name"
              rules={{
                required: "Name is required",
                minLength: { value: 2, message: "Too short" },
              }}
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <InputGroup className="py-5">
                      <InputGroupInput placeholder="Name" {...field} />

                      <InputGroupAddon>
                        <User />
                      </InputGroupAddon>

                      {fieldState.error && (
                        <InputGroupButton
                          className="relative text-red-500 cursor-pointer group"
                          onClick={() => toggleToolTip(field.name)}
                        >
                          <AlertCircle size={22} />

                          {/* TOOLTIP */}
                          <div
                            className={`absolute right-0  top-full mt-2
                    bg-red-600 text-white text-xs rounded z-10 px-3 py-2 shadow-lg w-max max-w-[200px]
                    ${
                      activeToolTip === field.name
                        ? "block"
                        : "hidden group-hover:block"
                    }`}
                          >
                            {fieldState.error.message}
                          </div>
                        </InputGroupButton>
                      )}
                    </InputGroup>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* EMAIL — SIGNUP ONLY */}
            {authMode === "signup" && (
              <FormField
                control={form.control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                }}
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <InputGroup className="py-5">
                        <InputGroupInput placeholder="Email" {...field} />
                        <InputGroupAddon>
                          <Mail />
                        </InputGroupAddon>
                        {fieldState.error && (
                          <InputGroupButton
                            className="relative text-red-500 cursor-pointer group"
                            onClick={() => toggleToolTip(field.name)}
                          >
                            <AlertCircle size={22} />

                            {/* TOOLTIP */}
                            <div
                              className={`absolute right-0  top-full mt-2
                    bg-red-600 text-white text-xs rounded z-10 px-3 py-2 shadow-lg w-max max-w-[200px]
                    ${
                      activeToolTip === field.name
                        ? "block"
                        : "hidden group-hover:block"
                    }`}
                            >
                              {fieldState.error.message}
                            </div>
                          </InputGroupButton>
                        )}
                      </InputGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            )}

            {/* USERNAME — SIGNUP ONLY */}
            {authMode === "signup" && (
              <FormField
                control={form.control}
                name="username"
                rules={{ required: "Username is required" }}
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <InputGroup className="py-5">
                        <InputGroupInput placeholder="Username" {...field} />
                        <InputGroupAddon>
                          <User />
                        </InputGroupAddon>
                        {fieldState.error && (
                          <InputGroupButton
                            className="relative text-red-500 cursor-pointer group"
                            onClick={() => toggleToolTip(field.name)}
                          >
                            <AlertCircle size={22} />

                            {/* TOOLTIP */}
                            <div
                              className={`absolute right-0  top-full mt-2
                    bg-red-600 text-white text-xs rounded z-10 px-3 py-2 shadow-lg w-max max-w-[200px]
                    ${
                      activeToolTip === field.name
                        ? "block"
                        : "hidden group-hover:block"
                    }`}
                            >
                              {fieldState.error.message}
                            </div>
                          </InputGroupButton>
                        )}
                      </InputGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            )}

            {/* PASSWORD */}
            <FormField
              control={form.control}
              name="password"
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <InputGroup className="py-5">
                      <InputGroupInput
                        type={isHidden ? "password" : "text"}
                        placeholder="Password"
                        {...field}
                      />
                      <InputGroupAddon>
                        <Lock />
                      </InputGroupAddon>
                      <InputGroupButton
                        onClick={() => setIsHidden(!isHidden)}
                        size="icon-sm"
                      >
                        {isHidden ? <EyeClosed /> : <Eye />}
                      </InputGroupButton>
                      {fieldState.error && (
                        <InputGroupButton
                          className="relative text-red-500 cursor-pointer group"
                          onClick={() => toggleToolTip(field.name)}
                        >
                          <AlertCircle size={22} />

                          {/* TOOLTIP */}
                          <div
                            className={`absolute right-0  top-full mt-2
                    bg-red-600 text-white text-xs rounded z-10 px-3 py-2 shadow-lg w-max max-w-[250px]
                    ${
                      activeToolTip === field.name
                        ? "block"
                        : "hidden group-hover:block"
                    }`}
                          >
                            {fieldState.error.message}
                          </div>
                        </InputGroupButton>
                      )}
                    </InputGroup>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* SUBMIT BUTTON */}
            <Button
              type="submit"
              variant="outline"
              className="w-full py-6 mt-auto"
            >
              {authMode === "login" ? "Log In" : "Sign Up"}
            </Button>

            {/* AUTH MODE SWITCH */}
            <p className="text-center mt-4">
              {authMode === "login"
                ? "Don't have an account? "
                : "Already have an account? "}
              <motion.span
                variants={hoverVariant}
                initial="rest"
                whileHover="hover"
                className="font-bold cursor-pointer"
                onClick={() =>
                  changeAuthMode(authMode === "login" ? "signup" : "login")
                }
              >
                {authMode === "login" ? "Sign Up" : "Log In"}
              </motion.span>
            </p>
          </motion.form>
        </Form>
      </motion.section>
    </>
  );
}
export default AuthForm;
