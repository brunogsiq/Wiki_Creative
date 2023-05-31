/*
Para realização de automação havendo necessidade de utilização de massa de dados

Instalando:
    npm install @faker-js/faker --save-dev

++ sobre a biblioteca: https://fakerjs.dev/guide/usage.html

Como utilizar:
    NodeJS:
    import { faker } from '@faker-js/faker';

    const randomName = faker.name.fullName(); // Rowan Nikolaus
    const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

    CommonJS
    const { faker } = require('@faker-js/faker');

    const randomName = faker.name.fullName(); // Rowan Nikolaus
    const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

    Browser#
    <script type="module">
    import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

    // Caitlyn Kerluke
    const randomName = faker.name.fullName();

    // Rusty@arne.info
    const randomEmail = faker.internet.email();
    </script>
*/