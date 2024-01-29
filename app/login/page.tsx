export default function Login() {
  return (
    <main className="bg-login-bg h-screen flex items-center justify-center bg-center bg-fixed">
      <div className="bg-blue-300 w-5/6 md:w-3/5 lg:w-2/5 h-4/5  sm:h-3/5 rounded-md text-white flex flex-col items-center">
        <br />
        <h1 className="font-bold text-5xl">Yconecta</h1>
        <h3 className="font-thin">En que te podemos ayudar?</h3>
        <br />
        <br />
        <h2 className="text-3xl font-bold">Login</h2>
        <br />
        <input
          className=" lg:w-1/2 w-5/6 p-3 rounded-full text-sky-900 decoration-white outline-none"
          placeholder="Correo"
        />
        <br />
        <input
          className=" lg:w-1/2 w-5/6 p-3 rounded-full text-sky-900 decoration-white outline-none"
          placeholder="Contraseña"
          type="password"
        />
        <div className="flex justify-evenly lg:w-1/2 w-full font-thin text-sm p-2">
          <a>Olvide mi contraseña</a> <a>Crear cuenta</a>
        </div>
        <br />
        <button className="bg-sky-900 rounded-full p-3">Iniciar Sesion</button>
        <br />
      </div>
    </main>
  );
}
