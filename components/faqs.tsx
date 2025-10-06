export default function Faqs() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-800 py-12 md:py-20 lg:border-0 lg:pt-0">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                FAQ
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-indigo-200/65">
              Everything you need to know about Treza's secure enclave platform.
            </p>
          </div>
          {/* Faqs */}
          <ul className="grid gap-8 md:grid-cols-2 lg:gap-y-12 xl:gap-x-16">
            <li>
              <h4 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                What are secure enclaves and how do they work?
              </h4>
              <p className="text-[1rem] text-indigo-200/65">
                Secure enclaves are isolated execution environments that provide hardware-level security and memory encryption. Your code and data remain completely private, even from cloud providers and system administrators.
              </p>
            </li>
            <li>
              <h4 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                How do I deploy my application to a secure enclave?
              </h4>
              <p className="text-[1rem] text-indigo-200/65">
                Simply upload your Docker container through our platform. Treza handles the entire deployment process automatically, including VPC setup, security group configuration, and real-time log access.
              </p>
            </li>
            <li>
              <h4 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                Which cloud providers does Treza support?
              </h4>
              <p className="text-[1rem] text-indigo-200/65">
                Treza currently supports AWS Nitro Enclaves with full automation and real-time monitoring. We're expanding to include Azure Confidential Computing and Google Cloud Confidential Computing.
              </p>
            </li>
            <li>
              <h4 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                What programming languages and frameworks are supported?
              </h4>
              <p className="text-[1rem] text-indigo-200/65">
                Treza supports any application that can run in a Docker container. Our Developer SDK provides libraries for multiple programming languages to simplify integration.
              </p>
            </li>
            <li>
              <h4 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                Will my data be private and safe?
              </h4>
              <p className="text-[1rem] text-indigo-200/65">
                Yes, your data is stored securely and is protected with advanced encryption methods. We follow industry-standard practices to ensure your privacy and data safety.
              </p>
            </li>
            <li>
              <h4 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                What payment options does Treza accept?
              </h4>
              <p className="text-[1rem] text-indigo-200/65">
                Treza accepts all major credit cards, including Visa, MasterCard, American Express, and Discover, as well as PayPal for added convenience.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
