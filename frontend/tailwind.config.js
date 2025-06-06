import { Bluetooth } from "lucide-react";

export default {
  content: ["./index.html", "./src/*/.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        white: "var(--bg-white)",
        gray: "var(--bg-gray-2)",
        gray: "var(--bg-gray-1)",

        darkgray: "var(--bg-gray-5)",
        red: "var(--bg-red)",
        red: "var(--bg-red-2)",
        yellow: "var(--bg-yellow)",

        yellow: "var(--bg-yellow-1)",
        blue: "var(--bg-blue-1)",

        purple: "var(--bg-purple)",
        green: "var(--bg-green)",

        green: "var(--bg-green-1)",
        red: "var(--bg-red-3)",
        blue: "var(--bg-blue-5)",


        // CHNAGES DONE

        buttonred: "var(--bg-buttonred-hover)",
        white: "var(--text-white-hover)",
        black: "var(--text-black-hover)",
        red: "var(--text-red-hover)",
        red: "var(--text-red-2-hover)",

        purple: "var(--text-purple-hover)",
        green: "var(--text-green-hover)",
       
        buttongray: "var(--bg-buttongray-hover)",

        textColor: {
          gray: "var(--text-gray)",
          gray2: "var(--text-gray-2)",
          black: "var(--text-black)",
          red: "var(--text-red)",
          purple: "var(--text-purple)",
          green: "var(--text-green)",
          yellow: "var(--text-yellow)",
          white: "var(--text-white)",
          blue: "var(--text-blue)",
          pink: "var(--text-pink)",

        },

        borderColor: {
          black: " var(--border-black)",
          red: "var(--border-red)",
          gray: "var(--border-gray)",

          white: "var(--border-white)",
        },
      },
    },
    plugins: [],
  },
};
