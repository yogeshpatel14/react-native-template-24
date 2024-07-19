export default function HookSplashScreen() {
  const checkIsAlreadyLogin: Function = () => {
    console.log('-----check login-----');
  };

  return {
    checkIsAlreadyLogin,
  };
}
