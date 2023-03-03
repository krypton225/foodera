import { TitleSection } from "../main";
import QuestionTitle from "./QuestionTitle/QuestionTitle";
import faqData from "./faq-data";

const FAQ = () => {
    return (
        <section className="sec-padding-12" id="faq">
            <TitleSection text="frequently asked questions" isWhite={false} fontSize={45} />

            <div className="container mt-28 grid grid-cols-1 xl:grid-cols-2 gap-10">

                {
                    faqData.map(({ id, questionText, answer }) => (
                        <div key={id} className="w-full">
                            <QuestionTitle text={questionText} color="secondary" />

                            <p className="mt-2 text-slate-500 leading-loose text-xl">{answer}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default FAQ;