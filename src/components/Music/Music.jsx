import React from 'react';
import first from "../../assets/audio/66363622_90839018.mp3";
import second from "../../assets/audio/brati-chsvv.mp3";
import third from "../../assets/audio/brati-chsvv-kolyadka-1.mp3";
import fourth from "../../assets/audio/brati-chsvv-r-zdvo-zoreyu-yasnoyu-s-ya.mp3";
import fifth from "../../assets/audio/brati-chsvv-svyat-bog-narodivsya.mp3";
import sixth from "../../assets/audio/brati-chsvv-svyatiy-mikolay.mp3";
import seventh from "../../assets/audio/brati-monahi-chsvv-stariy-rik.mp3";
import eighth from "../../assets/audio/natalka-karpa-kolyadki--tri-car.mp3";
import nine from "../../assets/audio/ukranski_koljadki_-_nehaj_rizdvo_u_vashu_hatu_(zf.fm).mp3";
import ten from "../../assets/audio/Колядки рина Федишин – Україна колядує.mp3";
import eleven from "../../assets/audio/brati-monahi-chsvv-bozhe-m-y-bozhe.mp3";
import twelve from "../../assets/audio/brati-monahi-chsvv-gorobchik.mp3";
import thirteenth from "../../assets/audio/brati-monahi-chsvv-hristiyanin.mp3";
import fourteenth from "../../assets/audio/brati-monahi-chsvv-lyubov-sila.mp3";
import fifteenth from "../../assets/audio/irina-fedishin-moja-koljada.mp3";
import sixteenth from "../../assets/audio/kolyadki-na-dvor-r-zdvo.mp3";
import seventeenth from "../../assets/audio/rina-fedishin-kolyadki-hay-sus-male-ditya-nove-2016.mp3";
import {Container} from "reactstrap";

const audioArray = [
    {id: 1, url: first, title: 'Засвіти зірко'},
    {id: 2, url: second, title: 'Різдвяна зірка'},
    {id: 3, url: third, title: 'В нашім краї переміни'},
    {id: 4, url: fourth, title: 'Зіронька раня'},
    {id: 5, url: fifth, title: 'Бог народився'},
    {id: 6, url: sixth, title: 'Святий Миколай'},
    {id: 7, url: seventh, title: 'Брати монахи-Старий рік'},
    {id: 8, url: eighth, title: 'Славнії царі'},
    {id: 9, url: nine, title: 'Різдво у хату'},
    {id: 10, url: ten, title: 'Україна колядує'},
    {id: 11, url: eleven, title: 'Боже мій Боже'},
    {id: 12, url: twelve, title: 'Горобчик'},
    {id: 13, url: thirteenth, title: 'Я християнин'},
    {id: 14, url: fourteenth, title: 'Любові сила'},
    {id: 15, url: fifteenth, title: 'Коляда'},
    {id: 16, url: sixteenth, title: 'На дворі різдво'},
    {id: 17, url: seventeenth, title: 'Хай Ісус, мале дитя'},
];

const Music = () => {
    return (
        <Container>
            <h2 className='text-center mb-3'>Best ukrainian songs</h2>
            <div className='d-flex flex-wrap justify-content-between'>
                {audioArray.map((audio) => (
                    <div key={audio.id}>
                        <audio className='mt-1' style={{outline: 'none'}} controls>
                            <source src={audio.url}/>
                        </audio>
                        <p className='text-center'>{audio.title}</p>
                    </div>
                ))}
            </div>
        </Container>
    )
};

export default Music;
