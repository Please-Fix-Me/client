import { Loading, QSpinnerGears } from "quasar";

type task = () => void;

export async function load(message: string, action: task) {
  try {
    Loading.show({ message: message });
    await action();
    Loading.hide();
  } catch (error) {
    Loading.hide();
    Loading.show({
      spinnerColor: "white",
      messageColor: "white",
      backgroundColor: "red",
      message: "Error running operation. Please try again",
    });
    setTimeout(() => {
      Loading.hide();
    }, 3000);
  }
}
