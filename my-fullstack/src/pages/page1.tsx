import { handleSubmit } from "@/api/infoBackend";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Page1() {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");

  return (
    <>
      <div className="flex shrink-0 w-[2502px] h-[1259px] bg-[#FBF5DE] flex-col">
        <h1 className="flex shrink-0 w-[379px] h-[74px] text-[#3D74B6] text-[64px] font-extrabold not-italic relative top-[413px] bottom-[772px] left-[1050px] right-[1073px]">
          Login
        </h1>
        <div className="relative top-[516px] bottom-[676px] left-[1050px] right-[1050px] w-[402px] h-[67px] flex shrink-0 bg-[#EAC8A6] rounded-[8px]">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
          />
        </div>
        <div className="relative top-[616px] bottom-[578px] left-[1050px] right-[1050px] w-[402px] h-[67px] flex shrink-0 bg-[#EAC8A6] rounded-[8px]">
          <input
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder="Type a message"
          />
        </div>
        <div className="relative top-[712px] bottom-[499px] left-[1132px] right-[1149px]">
          <Button
            onClick={() => {
              try {
                const data = handleSubmit(input, input2);
                console.log("Server response:", data);
              } catch (err) {
                console.error(err);
              }
            }}
          >
            Send
          </Button>
        </div>
      </div>
    </>
  );
}
