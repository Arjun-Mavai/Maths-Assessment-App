import  {useState} from "react";
import {Button, Modal, Form, Input, Select} from "antd";
import icons from "./icons"; // Import the icons object

// We can now use icons.quizIcon, icons.dashBoard, and so on from the icons object imported

// Your component code...

function App() {
  return (
    <div className=" max-w-screen overflow-hidden wrapper grid grid-cols-[15%_84%] gap-2 mt-2 mx-2  ">
      <div id="left-sidebar" className="flex flex-col items-center space-y-6  p-4 w-32 text[10px]">
        {/* Top Menu Wrapper */}
        <div id="top-menu-wrapper" className="space-y-6 text-[12px]">
          {/* Dashboard */}
          <div className="flex flex-col items-center">
            <img src={icons.dashBoard} alt="icon" className="h-6 w-6 mb-1" />
            <div className="">Dashboard</div>
          </div>

          {/* Assessment */}
          <div className="ring-3 ring-blue-500 bg-blue-100 border border-blue-300 rounded-lg p-2 flex flex-col items-center">
            <img src={icons.noteAlt} alt="icon" className="h-6 w-6 mb-1" />
            <div className="">Assessment</div>
          </div>

          {/* My Lib */}
          <div className="flex flex-col items-center">
            <img src={icons.quizIcon} alt="icon" className="h-6 w-6 mb-1" />
            <div className="">My lib</div>
          </div>
        </div>

        {/* Dashed Line */}
        <div className="border-t border-dashed border-gray-500 w-full mt-4 mb-6"></div>

        {/* Admin Menu Wrapper */}
        <div id="admin-menu-wrapper" className="flex flex-col items-center space-y-6">
          <div className="text-red-500 text-[10px] w-14 bg-pink-100 border border-red-500 rounded-full flex justify-center items-center">
            Admin
          </div>
          <div className="flex flex-col items-center">
            <img src={icons.quizIcon} alt="icon" className="h-6 w-6 mb-1" />
            <div className="text-center text-sm">
              Round
              <br />
              Status
            </div>
          </div>
        </div>
      </div>
 
{/* Main DashBoard Code starts from here */}

      <div className="w-full overflow-x-visible"> 
        <div id="main-dashboard">

          {/* Code for Header  */}


          <div className=" flex items-center justify-between   gap-[850px] mb-10 header">
            <div className="flex gap-4 items-baseline">
              <div className="text-customBlue text-[20px]">Assement</div>
              <div className="border-r border-gray1  h-6  "></div>

              <div className="text-[14px] text-blue1 font-semibold  ">My Assessments</div>
            </div>

            <div className=" ">
              <img src={icons.mobileScreen} alt="icon not found" className="  h-6 w-6  " />
            </div>
          </div>
          <div className="border-t border-gray1 w-full mb-4"></div>




{/* Code for  Main board statistics tiles   */}


          <div id="assessment-overview">
            <div className="text-customBlue text-[18px] pb-4 font-semibold" id="title">
              Assessments Overview
            </div>
            <div
              className="max-w-screen overflow-hidden border rounded-md border-gray1 flex justify-between h-[114px]"
              id="assessment-panel "
            >
              <div className="flex flex-col w-[162] h-14 " id="card1">
                <div
                  className=" text-customBlue font-inter text-[14px] font-semibold leading-5 tracking-normal text-left p-4 mb-5 "
                  id="title"
                >
                  Total Assessment
                </div>

                <div className=" ml-4  gap-4 flex items-center mt-[-32px]" id="iconstatwrapper">
                  <img src={icons.statsC} alt="icon not found" className="h-10 w-10  " />
                  <div className="stat text-[20px] font-semibold">34</div>
                </div>
              </div>
              <div className=" border border-gray1"></div>

              <div className="w-[369px] border-1 border-gray-300 pb-4 gap-2" id="card2">
                <div className="title text-customBlue font-semibold pb-10 pt-4 mt-0 ml-4  ">Candidates</div>
                <div className="stat-wrapper flex gap-2 mt-[-32px] ml-4">
                  {/* <div className="icon">Icon</div> */}
                  <img src={icons.person} alt="icon not found" className="h-10 w-10  " />
                  <StatComponent bigNumber={11489} smallNumber={89} subTitle={"Total Candidate"} />
                  <div className="separator border border-gray-300"></div>
                  <StatComponent bigNumber={11000} smallNumber={90} subTitle={"Who Attempted"} />
                </div>
              </div>
              <div className=" border border-gray-300  "></div>
              <div className="w-[499px] border-1 border-gray-300 flex flex-col  gap-4  " id="card3">
                <div className="title  text-customBlue font-semibold mt-2 ml-2">Candidate Source</div>
                <div className="flex pb-4  ml-2 gap-4">
                  <img src={icons.globe} alt="icon not found" className="h-10 w-10  " />
                  <StatComponent bigNumber={11000} smallNumber={89} subTitle={"Email"} />
                  <div className="separator border border-gray-300 mr-3 ml-1"></div>
                  <StatComponent bigNumber={145} smallNumber={89} subTitle={"Social Share"} />
                  <div className="separator border border-gray-300 mr-3 ml-1"></div>
                  <StatComponent bigNumber={145} smallNumber={89} subTitle={"Unique link"} />
                </div>
              </div>
              <div className="separator border border-gray-300"></div>
              <div className="w-[188px] border-r-1  border-gray1 border-opacity-25 overflow-x-visible p-4  " id="card4">
                <div className="title  text-customBlue font-semibold pb-4">Total purpose</div>

                <div className="flex mb-8 gap-2 mt-[-10px]">
                  <img src={icons.link} alt="icon not found" className="h-10 w-10  " />
                  <div className="text-[20px] font-semibold">11</div>
                </div>
              </div>
            </div>
          </div>

{/* Code for second  form assignment board tiles   */}


<div className="title mt-8 font-semibold text-customBlue text-[18px] pb-4">My Assessement </div>

          <div className="my-assessment flex gap-4">
            <div className="  w-[388px] h-[209px]  rounded-md border border-dashed border-gray1   bg-[#F6F8FA]">
              <FormFill />
              <div className="flex flex-col gap-4 ">
                <h1 className="text-[18px] text-customBlue flex justify-center font-semibold">New Assessment</h1>
                <p className="text-[12px] text-customBlue px-4 pb-4 mb-auto font-semibold">
                  From here you can question of multiple type like MCQs , subjective(text or paragraph)!
                </p>
              </div>
            </div>
            <MathAssessment /> <MathAssessment />
          </div>
        </div>
      </div>
    </div>
  );
}


{/* Component made for statistics used above in the main board below the header   */}


function StatComponent({bigNumber, smallNumber, subTitle}) {
  return (
    <div className="stat-component flex flex-col gap-2">
      <div className=" flex statsWrapper">
        <div className="biggerstats text-[20px] font-semibold ">{bigNumber}</div>
        <div className="smallStats text-[12px] py-1 text-green-500">+{smallNumber}</div>
      </div>

      <div className="text-[12px] text-customBlue font-semibold "> {subTitle}</div>
    </div>
  );
}



// Using Ant design Modal for assignment forms

const {Option} = Select;

function FormFill() { 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-center items-center  ">
        <Button
          className="text-[40px] bg-white text-blue1  mt-10 w-[70px] h-[70px] p-10 rounded-[72px] gap-10 flex items-center justify-center  "
          type=""
          onClick={showModal}
        >
          +
        </Button>
      </div>
      <Modal title="Create New Assignment" open={isModalOpen} onCancel={handleCancel} footer={null}>
        <Form layout="vertical">
          <Form.Item label="Name of the assessment" labelCol={{style: {fontWeight: "bold"}}} name="name">
            <Input placeholder="Type Here" className="" />
          </Form.Item>

          <Form.Item label="Purpose of the test is " labelCol={{style: {fontWeight: "bold"}}} name="option1">
            <Select placeholder="Select">
              <Option value="option1-1">Option 1-1</Option>
              <Option value="option1-2">Option 1-2</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Description" labelCol={{style: {fontWeight: "bold"}}} name="option2">
            <Select placeholder="Select">
              <Option value="option2-1">Option 2-1</Option>
              <Option value="option2-2">Option 2-2</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Skills" labelCol={{style: {fontWeight: "bold"}}}>
            <Select mode="tags" />
          </Form.Item>
          <Form.Item label="Time Duration" name="duration" labelCol={{style: {fontWeight: "bold"}}}>
            <Input placeholder="HH:MM:SS" />
          </Form.Item>
          {/* Button inside the Form */}
        </Form>

        <Button className="bg-blue-700" type="primary" block onClick={handleOk}>
          Save
        </Button>
      </Modal>
    </div>
  );
}


// Using Component for Math assignment tiles to reduce the repetition of code and make the code more modular

function MathAssessment() {
  return (
    <div className="card5 p-4 border border-gray1 w-[388px] h-[209px] rounded-md bg-white relative">
      {/* Top Left Icon */}

      {/* Top Right Icon */}
      <img src={icons.ThreeDotIcon} alt="Top Right Icon" className="absolute top-2 right-2 h-6 w-6" />
      <img src={icons.suitcase} alt="Suitcase Icon" className="h-12 w-12 top-0 left-0 mb-1" />

      <div className="heading1">
        <div className="flex flex-col justify-start gap-2  ">
          <div className="icons flex flex-col   space-y-2">
            <div className="title text-[18px] text-customBlue font-semibold ">Math Assessement</div>
          </div>

          <div className="date  flex space-x-2">
            <div className="job text-gray-500">Job</div>
            <div className="border-r border-gray1"></div>
            <div className="h-[14px] w-[14px] flex  items-center space-x-1">
              <img src={icons.calendar} alt="Calendar Icon" className="h-4 w-4 mt-2" />
              <div className="day font-inter text-[12px] mt-2">Apr</div>
            </div>
          </div>
        </div>

        <div className="border-t border-dashed border-gray-400 my-4"></div>

        <div className="flex justify-between items-center">
          <div className="bottomLeft flex gap-2">
            <div className="numbers flex flex-col items-center text-center">
              <div className="duration text-xl">00</div>
              <div className="questions font-semibold text-[12px] text-customBlue">Duration</div>
            </div>

            <div className="numbers flex flex-col items-center text-center">
              <div className="duration text-xl">00</div>
              <div className="questions font-semibold text-[12px] text-customBlue">Questions</div>
            </div>
          </div>

          <div className="right flex items-center space-x-3">
            <div className="shareText border border-customBlue h-[30px] px-2 py-1 rounded-full flex items-center space-x-1">
              <img src={icons.share} alt="Share Icon" className="h-4 w-4 text-customBlue" />
              <div className="share text-[14px] text-customBlue">Share</div>
            </div>
            <img src={icons.studentIcon} alt="Student Icon" className="h-8 w-8 text-customBlue" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
