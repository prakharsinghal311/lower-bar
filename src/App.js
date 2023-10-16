import UpperSection3 from "./assets/UpperSection3.jpg";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";

function App() {
  return (
    <>
      <img
        classNmae="h-auto max-w-full"
        src={UpperSection3}
        alt="img description"
      />
      <div className="flex flex-row mx-32">
        <div className="mx-12 mt-20 grid justify-items-center">
          <div className=" h-10 w-10 flex items-center grid justify-items-center  border rounded-full bg-[#5E17EB]">
            <ChatBubbleIcon style={{ color: "white" }} />
          </div>
          <div className="font-bold mt-2">Chat with us</div>
          <div className="font-semibold mt-2 text-slate-600">
            Chat live with one of our support specialists.
          </div>
        </div>
        <div className="mx-12 mt-20 grid justify-items-center">
          <div className=" h-10 w-10 flex items-center grid justify-items-center  border rounded-full bg-[#5E17EB]">
            <GroupsIcon style={{ color: "white" }} />
          </div>
          <div className="font-bold mt-2">Ask the community</div>
          <div className="font-semibold mt-2 text-slate-600">
            Explore our community forums and communicate with other users.
          </div>
        </div>
        <div className="mx-12 mt-20 grid justify-items-center">
          <div className=" h-10 w-10 flex items-center grid justify-items-center  border rounded-full bg-[#5E17EB]">
            <QuestionMarkOutlinedIcon style={{ color: "white" }} />
          </div>
          <div className="font-bold mt-2">Support center</div>
          <div className="font-semibold mt-2 text-slate-600">
            Browse FAQ's and support articles to find solutions.
          </div>
        </div>
        <div className="mx-12 mt-20 grid justify-items-center">
          <div className=" h-10 w-10 flex items-center grid justify-items-center  border rounded-full bg-[#5E17EB]">
            <LocalPhoneOutlinedIcon style={{ color: "white" }} />
          </div>
          <div className="font-bold mt-2">Call us</div>
          <div className="font-semibold mt-2 text-slate-600">
            Call us during normal business hours at (555) 892-9403
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
