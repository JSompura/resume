<template>
    <DefaultSection reverse
        >>
        <template #image-column>
            <img
                src="/images/home_pose.png"
                alt="Jigar Sompura"
                class="w-auto h-auto rounded-full object-cover"
            />
        </template>
        <template #text-column>
            <h2 class="text-4xl font-bold">Software Developer (Fabninjas Pvt Ltd)</h2>
            <p class="text-lg mt-4 leading-relaxed">2022-Current</p>
            <ul class="list-disc list-inside mt-4 text-lg leading-relaxed">
                <li>
                    Spearheaded the development of a customized invoicing functionality tailored for
                    intermediary processes, overcoming inherent challenges and ensuring adaptability
                    to diverse business requirements.
                </li>
                <li>
                    Pioneered the design and implementation of automated workflows, empowering users
                    to effortlessly create dynamic flowcharts with predefined actions, thereby
                    streamlining and automating their operational processes.
                </li>
                <li>
                    Engineered optimizations within schedulers, strategically transitioning logic to
                    a queue-based system. This initiative resulted in a remarkable performance
                    boost, with the schedulers exhibiting an improvement of over 50%.
                </li>
            </ul>
            <h2 class="text-4xl font-bold">Software Developer (Clientjoy)</h2>
            <p class="text-lg mt-4 leading-relaxed">2020-2022</p>
            <ul class="list-disc list-inside mt-4 text-lg leading-relaxed">
                <li>
                    Implemented websockets for real-time client notifications in the Clientjoy web
                    app.
                </li>
                <li>
                    Managed payment gateways (PayPal and Stripe) for seamless onboarding and
                    transactions.
                </li>
                <li>
                    Developed and utilized public APIs (REST) with openAPI standards, integrating
                    them for Zapier and Integromat.
                </li>
            </ul>
        </template>
    </DefaultSection>
</template>
