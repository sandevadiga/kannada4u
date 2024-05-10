export const metadata  ={
  title: "Contact Us"
}


export default function ContactUs() {
  return (
    <div className="bg-white text-gray-600 font-sans leading-normal tracking-normal">

      <div className="container mx-auto flex flex-wrap py-6">
        <div className="w-full md:w-2/3 flex flex-col px-3">
          <h1 className="font-bold text-3xl mb-6">Contact Us</h1>
          <p>
            We're here to provide you with more information, answer any questions you may have and create an effective solution for your needs. If you have any questions or need further information, please feel free to contact us.
          </p>
          <h2 className="font-bold text-2xl mt-6">Contact Details</h2>
          <ul className="list-disc list-inside mt-4">
            <li><strong>Name:</strong> Santhosh (Owner/CEO)</li>
            <li><strong>Email:</strong> santhosrdevadiga@gmail.com</li>
            <li><strong>Phone:</strong> 9972493349</li>
            <li><strong>Address:</strong> Belathangadi, Dakshina Kannada</li>
          </ul>
          <h2 className="font-bold text-2xl mt-6">Business Hours</h2>
          <p className="mt-4">
            Our support available to help you 24 hours a day, seven days a week.
          </p>
          <h2 className="font-bold text-2xl mt-6">Customer Service</h2>
          <p className="mt-4">
            If you have any issues or suggestions, please feel free to contact our customer service at santhosrdevadiga@gmail.com. We value your feedback and strive to improve our services based on it.
          </p>
        </div>
      </div>
    </div>
  )
}
