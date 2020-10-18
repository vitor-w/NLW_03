const database = require('./db.js');
//const saveOrphanage = require('./saveOrphanage.js');

database.then(async db => {
    // insert data in table
        // await saveOrphanage(db, {
        //     lat: "-27.222633",
        //     lng: "-49.6555874",
        //     name: "Lar dos meninos",
        //     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        //     whatsapp: "1233434532",
        //     images: [
    
        //         "https://images.unsplash.com/photo-1594753154778-273013529793?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", 
    
        //         "https://images.unsplash.com/photo-1576715159532-32eb4490f140?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        //     ].toString(),
    
        //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        //     opening_hours: "Horário de visitas Das 18h até 8h",
        //     open_on_weekends: "0"
        // });

    // consult data of table
        const selectedOrphanages = await db.all("SELECT * FROM orphanages");
        console.log(selectedOrphanages);
    
    // consult only one orphanage by id
        // await db.all('SELECT * FROM orphanages WHERE id = "3"');
        // await db.all('SELECT * FROM orphanages WHERE id = "4"');
        // await db.all('SELECT * FROM orphanages WHERE id = "5"');
        // await db.all('SELECT * FROM orphanages WHERE id = "6"');
        // await db.all('SELECT * FROM orphanages WHERE id = "7"');
        //console.log(orphanage);

    // delete data from table
    //    console.log(await db.run('DELETE FROM orphanages WHERE id = "3"'));
    //    console.log(await db.run('DELETE FROM orphanages WHERE id = "4"'));
    //    console.log(await db.run('DELETE FROM orphanages WHERE id = "5"'));
    //    console.log(await db.run('DELETE FROM orphanages WHERE id = "6"'));
    //    console.log(await db.run('DELETE FROM orphanages WHERE id = "7"'));
});