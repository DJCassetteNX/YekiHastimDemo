import { useEffect, useState } from "react";

const Questions = () => {
  const [openId, setOpenId] = useState(null);
  const [question, setQuestion] = useState([]);
  const fetchQuestions = async () => {
    try {
      const data = await fetch("/db.json");
      const res = await data.json();
      setQuestion(res.questions);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchQuestions();
  }, []);
  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <div className="px-[20px] lg:px-[40px] ">
      {question.map((item) => {
        return (
          <div
            key={item.id}
            className="h-auto flex flex-col justify-center  transition-all duration-500 ease-linear border-b-[1px] border-Stroke-Greyscale-Greyscale-300 "
          >
            <div
              className="w-full h-[44px] flex justify-between items-center   transition-all duration-300 ease-linear"
              onClick={() => toggle(item.id)}
            >
              <h1
                className={`
                  isOpen === false
                    ? " font-Abar_Low_FaNum font-semibold text-[14px] leading-[1.6] h-[22px] ${
                      openId === item.id
                        ? "text-Secondary-900"
                        : "text-Text-General-Text-Light "
                    }`}
              >
                {item.question}
              </h1>
              <img
                className={`
                 
                      flex justify-center items-center w-[20px] h-[20px] p-[4px] ${
                        openId === item.id ? "!hidden" : "!block"
                      }
                `}
                src="./images/about/svg/plus.svg"
                alt=""
              />
              <img
                className={`
                 
                flex justify-center items-center w-[20px] h-[20px] p-[4px] ${
                  openId === item.id ? "!block" : "!hidden"
                }
          `}
                src="./images/about/svg/minus.svg"
                alt=""
              />
            </div>
            {openId === item.id && (
              <div>
                <p className=" font-Abar_Low_FaNum font-regular text-[14px] leading-[1.6] text-Text-Greyscale-600 pb-[20px]">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
