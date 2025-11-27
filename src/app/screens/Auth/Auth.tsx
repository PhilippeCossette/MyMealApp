import AuthForm from "../../../components/auth/AuthForm";

function Auth() {
  return (
    <section className="w-full min-h-screen p-5 flex flex-col justify-end gap-12">
      <div>
        <h1 className="text-6xl sm:text-8xl font-bold">
          Plan Better <span className="text-primary-300">.</span>
        </h1>
        <h1 className="text-6xl sm:text-8xl font-bold">
          Eat Better <span className="text-primary-300">.</span>
        </h1>
      </div>
      <div className="flex">
        <button className=" bg-neutral-200 text-primary-600 py-6 px-4 rounded flex-1">
          Get Started
        </button>
      </div>
      <AuthForm />
    </section>
  );
}

export default Auth;
