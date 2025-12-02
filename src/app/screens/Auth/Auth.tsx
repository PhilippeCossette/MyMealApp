import { useState } from "react";
import AuthForm from "../../../components/auth/AuthForm";
import { motion, AnimatePresence } from "framer-motion";
import { de } from "zod/locales";

function Auth() {
  const [isOpen, setIsOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");

  const childVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const parentVariant = {
    hidden: {},
    visible: {
      transition: { delay: 0.2, staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const hoverVariant = {
    rest: { scale: 1, opacity: 0.8 },
    hover: { scale: 1.05, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      variants={parentVariant}
      initial="hidden"
      animate="visible"
      className="w-full min-h-screen p-8 flex flex-col justify-end gap-12"
    >
      <div>
        <motion.p variants={childVariant} className="text-xl font-semibold">
          Healthy meals without the stress
        </motion.p>
        <motion.h1
          variants={childVariant}
          className="text-6xl sm:text-8xl font-bold"
        >
          Plan Smarter <span className="text-primary-500">.</span>
        </motion.h1>
        <motion.h1
          variants={childVariant}
          className="text-6xl sm:text-8xl font-bold"
        >
          Eat Better <span className="text-primary-500">.</span>
        </motion.h1>
      </div>
      <div className="flex flex-col gap-12">
        <motion.button
          variants={childVariant}
          onClick={() => {
            setAuthMode("signup");
            setIsOpen(true);
          }}
          className=" bg-neutral-200 text-primary-600 py-6 px-4 rounded flex-1"
        >
          Get Started
        </motion.button>
        <motion.p variants={childVariant} className="text-center">
          Aleready have an account?{" "}
          <motion.span
            variants={hoverVariant}
            initial="rest"
            whileHover="hover"
            className="font-bold cursor-pointer"
            onClick={() => {
              setAuthMode("login");
              setIsOpen(true);
            }}
          >
            Log In
          </motion.span>
        </motion.p>
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <AuthForm
            onClose={() => setIsOpen(false)}
            changeAuthMode={setAuthMode}
            authMode={authMode}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default Auth;
