import UpperSection3 from "./assets/UpperSection3.jpg";
import ContactUs from "./assets/Contact us.jpg";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";

function App() {
  return (
    <>
      <nav className="bg-[#5E17EB] h-36 grid justify-items-center">
        <div className="mt-14 font-bold text-4xl text-white">Contact Us</div>
        <div className="self-end font-semibold text-xl text-slate-200">
          Have questions? We're here to help!
        </div>
      </nav>

      <img
        classNmae="h-auto max-w-full"
        src={ContactUs}
        alt="img description"
      />
      <div className="lg:flex lg:flex-row mx-32">
        <div className="lg:mx-6 xl:mx-12 mt-20 grid justify-items-center">
          <div className=" h-10 w-10 flex items-center grid justify-items-center  border rounded-full bg-[#5E17EB]">
            <ChatBubbleIcon style={{ color: "white" }} />
          </div>
          <div className="font-bold mt-2">Chat with us</div>
          <div className="font-semibold mt-2 text-slate-600">
            Chat live with one of our support specialists.
          </div>
        </div>
        <div className="lg:mx-6 xl:mx-12 mt-20 grid justify-items-center">
          <div className=" h-10 w-10 flex items-center grid justify-items-center  border rounded-full bg-[#5E17EB]">
            <GroupsIcon style={{ color: "white" }} />
          </div>
          <div className="font-bold mt-2">Ask the community</div>
          <div className="font-semibold mt-2 text-slate-600">
            Explore our community forums and communicate with other users.
          </div>
        </div>
        <div className="lg:mx-6 xl:mx-12 mt-20 grid justify-items-center">
          <div className=" h-10 w-10 flex items-center grid justify-items-center  border rounded-full bg-[#5E17EB]">
            <QuestionMarkOutlinedIcon style={{ color: "white" }} />
          </div>
          <div className="font-bold mt-2">Support center</div>
          <div className="font-semibold mt-2 text-slate-600">
            Browse FAQ's and support articles to find solutions.
          </div>
        </div>
        <div className="lg:mx-6 xl:mx-12 mt-20 grid justify-items-center">
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
