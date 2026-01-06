import { BookingPolicy, PaymentConfirmation } from "./rulesItem.js";
const GameRules = () => {
  return (
    <>
      <div className="rules-wrapper">
        {/* booking */}
        <div className="rules-list pb-12.5 mb-12.5 border-b-1 border-[#00000014]">
          <h2 className="mb-5">Booking & Time Policy</h2>
          <ul className="list-disc ml-10">
            {BookingPolicy.map((item, index) => (
              <li key={index} className="leading-10 max-md:leading-8">
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Payment & Confirmation */}
        <div className="rules-list pb-12.5 mb-12.5 border-b-1 border-[#00000014]">
          <h2 className="mb-5">Payment & Confirmation</h2>
          <ul className="list-disc ml-10">
            {PaymentConfirmation.map((item, index) => (
              <li key={index} className="leading-10 max-md:leading-8">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        {/* Cancellation & Rescheduling */}
        <div className="rules-list pb-12.5 mb-12.5 border-b-1 border-[#00000014]">
          <h2 className="mb-5">Cancellation & Rescheduling</h2>
          <ul className="list-disc ml-10">
            {PaymentConfirmation.map((item, index) => (
              <li key={index} className="leading-10 max-md:leading-8">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        {/* Playing Rules & Conduct */}
        <div className="rules-list pb-12.5 mb-12.5 border-b-1 border-[#00000014]">
          <h2 className="mb-5">Playing Rules & Conduct</h2>
          <ul className="list-disc ml-10">
            {PaymentConfirmation.map((item, index) => (
              <li key={index} className="leading-10 max-md:leading-8">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        {/* Turf Usage Guidelines */}
        <div className="rules-list pb-12.5 mb-12.5 border-b-1 border-[#00000014]">
          <h2 className="mb-5">Turf Usage Guidelines</h2>
          <ul className="list-disc ml-10">
            {PaymentConfirmation.map((item, index) => (
              <li key={index} className="leading-10 max-md:leading-8">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        {/* Equipment Responsibility */}
        <div className="rules-list pb-12.5 mb-12.5 border-b-1 border-[#00000014]">
          <h2 className="mb-5">Equipment Responsibility</h2>
          <ul className="list-disc ml-10">
            {PaymentConfirmation.map((item, index) => (
              <li key={index} className="leading-10 max-md:leading-8">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        {/* Safety & Injury Disclaimer */}
        <div className="rules-list pb-12.5 mb-12.5 border-b-1 border-[#00000014]">
          <h2 className="mb-5">Safety & Injury Disclaimer</h2>
          <ul className="list-disc ml-10">
            {PaymentConfirmation.map((item, index) => (
              <li key={index} className="leading-10 max-md:leading-8">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        {/* Capacity & Team Limits */}
        <div className="rules-list pb-12.5 mb-12.5 border-b-1 border-[#00000014]">
          <h2 className="mb-5">Capacity & Team Limits</h2>
          <ul className="list-disc ml-10">
            {PaymentConfirmation.map((item, index) => (
              <li key={index} className="leading-10 max-md:leading-8">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        {/* Weather & Force Majeure */}
        <div className="rules-list pb-12.5 mb-12.5 border-b-1 border-[#00000014]">
          <h2 className="mb-5">Weather & Force Majeure</h2>
          <ul className="list-disc ml-10">
            {PaymentConfirmation.map((item, index) => (
              <li key={index} className="leading-10 max-md:leading-8">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        {/* Photography & Media */}
        <div className="rules-list pb-12.5 mb-12.5 border-b-1 border-[#00000014]">
          <h2 className="mb-5">Photography & Media</h2>
          <ul className="list-disc ml-10">
            {PaymentConfirmation.map((item, index) => (
              <li key={index} className="leading-10 max-md:leading-8">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        {/* Management Rights */}
        <div className="rules-list mb-12.5">
          <h2 className="mb-5">Management Rights</h2>
          <ul className="list-disc ml-10">
            {PaymentConfirmation.map((item, index) => (
              <li key={index} className="leading-10 max-md:leading-8">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        {/* Final Note */}
        <div className="rules-list p-14 max-md:p-5 bg-[#F9EBDA] rounded-[20px]">
          <h2 className="mb-5 text-center">Final Note</h2>
          <p className="text-center leading-10 max-md:leading-8">These rules exist to maintain fairness, safety, and smooth operations.Failure to comply may result in cancellation without refund.</p>
          <p className="text-center font-bold text-[#15A34A] flex gap-8 justify-center mt-7 max-md:flex-col max-md:gap-2"><span>Play fair.</span><span>Respect the turf.</span><span>Respect the time.</span></p>
        </div>
      </div>
    </>
  );
};

export default GameRules;
