import { useEffect } from "react";
import { Widget } from "@maticnetwork/wallet-widget";

const widget = new Widget({
  target: "#btnOpenWidget",
  appName: "Joeun",
  autoShowTime: 0,
  position: "bottom-right",
  height: 630,
  width: 540,
  overlay: false,
  network: "mainnet",
  closable: true,
});

function PolygonWidget() {
  useEffect(() => {
    widget.create();
  }, []);

  return (
    <>
      <button
        id="btnOpenWidget"
        className="w-full px-10 py-4 mb-5 mr-5 font-extrabold transition duration-300 ease-in-out delay-150 rounded-lg shadow text-cyan-900 bg-cyan-50 hover:bg-cyan-100 active:bg-cyan-200 md:w-fit"
      >
        Open Polygon Widget
      </button>
    </>
  );
}

export default PolygonWidget;
