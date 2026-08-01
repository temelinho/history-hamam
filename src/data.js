/**
 * History Hamam & Spa - Catalog Data Store
 * Supports multi-language (TR, EN, RU, DE) and multi-currency (TRY, EUR, USD, GBP)
 */

const CURRENCY_RATES = {
  TRY: { symbol: '₺', rate: 1, position: 'before' },
  EUR: { symbol: '€', rate: 0.026, position: 'after' },
  USD: { symbol: '$', rate: 0.029, position: 'before' },
  GBP: { symbol: '£', rate: 0.022, position: 'before' }
};

const UI_TRANSLATIONS = {
  tr: {
    tagline: "GELENEKSEL OSMANLI HAMAMI • EST. ANTALYA",
    experience: "HAKİKİ OSMANLI SPA DENEYİMİ",
    hero_title: "Saray İhtişamıyla Yenilenin",
    hero_desc: "Tarihi Osmanlı hamam gelenekleri, uzman masörlerimiz, özel banyo bakım ürünlerimiz, soğuk ve sıcak ikramlıklarımızla ruhunuzu dinlendirin.",
    search_placeholder: "Hizmet, masaj, ürün veya meşrubat ara...",
    tab_all: "Tüm Katalog",
    tab_services: "HİZMETLER",
    tab_products: "ÜRÜNLER",
    cat_services_title: "MASAJ VE HAMAM HİZMETLERİ",
    cat_products_title: "ÖZEL BAKIM & SPA ÜRÜNLERİ",
    sort_by: "Sırala:",
    sort_featured: "Öne Çıkanlar",
    sort_price_asc: "Fiyat: Düşükten Yükseğe",
    sort_price_desc: "Fiyat: Yüksekten Düşüğe",
    sort_name: "İsme Göre (A-Z)",
    all_categories: "Tümü",
    direct_whatsapp: "WhatsApp Rezervasyon",
    detail_btn: "Detaylar & İncele",
    reserve_now: "WhatsApp İle Sipariş / Rezerve Et",
    call_us: "Hemen Ara",
    duration: "Süre",
    minutes: "dakika",
    included: "Dahil Olanlar",
    features: "Özellikler",
    empty_title: "Aradığınız kriterde ürün veya hizmet bulunamadı",
    empty_desc: "Lütfen arama teriminizi değiştirin veya filtreleri temizleyin.",
    reset_filters: "Filtreleri Temizle",
    feat1_title: "Geleneksel Osmanlı Hizmeti",
    feat1_desc: "Saray geleneklerine uygun kese, köpük ve özel bitkisel banyo ritüelleri.",
    feat2_title: "Uzman Terapistler",
    feat2_desc: "Sertifikalı ve deneyimli tatar tellakları ile bayan/bay masaj uzmanları.",
    feat3_title: "%100 Doğal Ürünler",
    feat3_desc: "Saf zeytinyağlı sabunlar, doğal kil ve organik masaj yağları.",
    feat4_title: "Zengin İkram & Büfe",
    feat4_desc: "Köpüklü Türk kahvesi, soğuk Osmanlı şerbeti, meşrubatlar ve zengin atıştırmalıklar.",
    footer_about: "Alanya'nın kalbinde tarihi dokusu, lüks spa ritüelleri, banyo ürünleri ve güler yüzlü hizmet anlayışıyla misafirlerimize unutulmaz bir ferahlık sunuyoruz.",
    footer_contact_title: "İletişim & Konum",
    working_hours: "Haftanın 7 Günü: 09:00 - 00:30",
    qr_menu_title: "Dijital Menü QR",
    qr_sub: "Masalarda Telefonunuzla Okutun",
    call: "Ara",
    whatsapp_order: "WhatsApp Bilgi & Sipariş",
    select_lang: "Dil Seçimi",
    select_curr: "Döviz",
    nav_catalog: "Dijital Menü",
    nav_intro: "Tanıtım Sayfası",
    go_to_catalog: "Dijital Menüyü İnceleyin (Katalog & Fiyatlar)"
  },
  en: {
    tagline: "TRADITIONAL TURKISH BATH • EST. ANTALYA",
    experience: "AUTHENTIC OTTOMAN SPA EXPERIENCE",
    hero_title: "Rejuvenate in Royal Splendor",
    hero_desc: "Immerse yourself in authentic Ottoman Turkish bath traditions, expert therapists, organic spa products, and refreshing gourmet drinks.",
    search_placeholder: "Search service, massage, product or drink...",
    tab_all: "All Items",
    tab_services: "SERVICES",
    tab_products: "PRODUCTS",
    cat_services_title: "MASSAGE & HAMAM SERVICES",
    cat_products_title: "EXCLUSIVE CARE & SPA PRODUCTS",
    sort_by: "Sort by:",
    sort_featured: "Featured First",
    sort_price_asc: "Price: Low to High",
    sort_price_desc: "Price: High to Low",
    sort_name: "Name (A-Z)",
    all_categories: "All",
    direct_whatsapp: "WhatsApp Reservation",
    detail_btn: "Details & View",
    reserve_now: "Order / Book via WhatsApp",
    call_us: "Call Now",
    duration: "Duration",
    minutes: "min",
    included: "Included Services",
    features: "Product Highlights",
    empty_title: "No products or services found",
    empty_desc: "Please try adjusting your search terms or clearing filters.",
    reset_filters: "Clear Filters",
    feat1_title: "Traditional Ottoman Heritage",
    feat1_desc: "Authentic royal bathing rituals, kese exfoliation, and herbal foam soaps.",
    feat2_title: "Expert Therapists",
    feat2_desc: "Certified male and female therapists for personalized relaxation.",
    feat3_title: "100% Organic Products",
    feat3_desc: "Pure olive oil soaps, natural volcanic clay, and therapeutic oils.",
    feat4_title: "Gourmet Refreshments",
    feat4_desc: "Foamy Turkish coffee, cold Ottoman sherbet, soft drinks & fresh snacks.",
    footer_about: "Located in the heart of Alanya, History Hamam delivers authentic Ottoman luxury, rejuvenating spa treatments, and warm hospitality.",
    footer_contact_title: "Contact & Location",
    working_hours: "Open 7 Days a Week: 09:00 - 00:30",
    qr_menu_title: "Digital Menu QR",
    qr_sub: "Scan with your phone at tables",
    call: "Call",
    whatsapp_order: "WhatsApp Inquiry & Order",
    select_lang: "Language",
    select_curr: "Currency",
    nav_catalog: "Digital Menu",
    nav_intro: "About Us / Intro",
    go_to_catalog: "Explore Digital Menu (Catalog & Prices)"
  },
  ru: {
    tagline: "ТРАДИЦИОННЫЙ ТУРЕЦКИЙ ХАМАМ • АЛАНИЯ",
    experience: "ПОДЛИННЫЙ ОСМАНСКИЙ СПА ОПЫТ",
    hero_title: "Королевское Обновление и Отдых",
    hero_desc: "Окунитесь в традиции турецкого хамама: классический пилинг, пенный массаж, органическая косметика и освежающие напитки.",
    search_placeholder: "Поиск услуги, массажа, товара или напитка...",
    tab_all: "Весь Каталог",
    tab_services: "УСЛУГИ",
    tab_products: "ТОВАРЫ",
    cat_services_title: "МАССАЖ И УСЛУГИ ХАМАМА",
    cat_products_title: "СПА И КОСМЕТИЧЕСКАЯ ПРОДУКЦИЯ",
    sort_by: "Сортировка:",
    sort_featured: "Рекомендуемые",
    sort_price_asc: "Цена: по возрастанию",
    sort_price_desc: "Цена: по убыванию",
    sort_name: "По названию (А-Я)",
    all_categories: "Все",
    direct_whatsapp: "WhatsApp Бронь",
    detail_btn: "Подробнее",
    reserve_now: "Заказать / Забронировать",
    call_us: "Позвонить",
    duration: "Время",
    minutes: "мин",
    included: "Включено в процедуру",
    features: "Особенности",
    empty_title: "Ничего не найдено",
    empty_desc: "Попробуйте изменить поисковый запрос или сбросить фильтры.",
    reset_filters: "Сбросить фильтры",
    feat1_title: "Османские Традиции",
    feat1_desc: "Настоящий пенный массаж, пилинг рукавицей Кесе и распаривание.",
    feat2_title: "Опытные Массажисты",
    feat2_desc: "Сертифицированные мастера (мужчины и женщины).",
    feat3_title: "100% Эко Продукты",
    feat3_desc: "Натуральное оливковое мыло, вулканическая глина и масла.",
    feat4_title: "Напитки и Угощения",
    feat4_desc: "Турецкий кофе, прохладительные шербеты, соки и сладости.",
    footer_about: "В самом сердце Алании — традиционный роскошный хамам, атмосфера умиротворения и премиальный сервис.",
    footer_contact_title: "Контакты и Адрес",
    working_hours: "Ежедневно: 09:00 - 00:30",
    qr_menu_title: "QR Меню",
    qr_sub: "Сканируйте смартфоном",
    call: "Звонок",
    whatsapp_order: "WhatsApp Заказ",
    select_lang: "Язык",
    select_curr: "Валюта",
    nav_catalog: "Цифровое Меню",
    nav_intro: "О Нас",
    go_to_catalog: "Перейти в Цифровое Меню (Цены)"
  },
  de: {
    tagline: "TRADITIONELLES TÜRKISCHES BAD • ALANYA",
    experience: "AUTHENTISCHES OSMANISCHES SPA-ERLEBNIS",
    hero_title: "Erholung in Königlicher Pracht",
    hero_desc: "Genießen Sie traditionelle Hamam-Rituale, professionelle Massagen, Pflegeprodukte und erfrischende Getränke.",
    search_placeholder: "Suchen Sie nach Service, Massage oder Getränken...",
    tab_all: "Gesamter Katalog",
    tab_services: "ANGEBOTE",
    tab_products: "PRODUKTE",
    cat_services_title: "MASSAGE & HAMAM ANGEBOTE",
    cat_products_title: "SPA & EXKLUSIVE PFLEGEPRODUKTE",
    sort_by: "Sortieren:",
    sort_featured: "Empfohlen",
    sort_price_asc: "Preis: Aufsteigend",
    sort_price_desc: "Preis: Absteigend",
    sort_name: "Name (A-Z)",
    all_categories: "Alle",
    direct_whatsapp: "WhatsApp Reservierung",
    detail_btn: "Details ansehen",
    reserve_now: "Über WhatsApp Buchen",
    call_us: "Jetzt Anrufen",
    duration: "Dauer",
    minutes: "Min",
    included: "Inbegriffen",
    features: "Produkt-Highlights",
    empty_title: "Keine Ergebnisse gefunden",
    empty_desc: "Bitte ändern Sie Ihren Suchbegriff oder setzen Sie die Filter zurück.",
    reset_filters: "Filter zurücksetzen",
    feat1_title: "Osmanisches Erbe",
    feat1_desc: "Klassisches Peeling (Kese) und cremiger Schaummassage-Genuss.",
    feat2_title: "Experten-Therapeuten",
    feat2_desc: "Zertifizierte Masseurinnen und Masseure für Ihre Entspannung.",
    feat3_title: "100% Natürliche Produkte",
    feat3_desc: "Reine Olivenölseifen, Heilerde und pflegende Öle.",
    feat4_title: "Köstliche Erfrischungen",
    feat4_desc: "Türkischer Kaffee, kühler Osmanischer Scherbet, Getränke & Snacks.",
    footer_about: "History Hamam in Alanya bietet Ihnen königliches Ambiente, exklusive Spa-Behandlungen und traditionelle Gastfreundschaft.",
    footer_contact_title: "Kontakt & Standort",
    working_hours: "Täglich geöffnet: 09:00 - 00:30",
    qr_menu_title: "Digitales Menü QR",
    qr_sub: "Mit dem Smartphone scannen",
    call: "Anrufen",
    whatsapp_order: "WhatsApp Info & Bestellung",
    select_lang: "Sprache",
    select_curr: "Währung",
    nav_catalog: "Digitales Menü",
    nav_intro: "Über Uns / Info",
    go_to_catalog: "Zum Digitalen Menü (Preise & Angebote)"
  }
};

const CATALOG_ITEMS = [
  // --- HAMAM & SPA SERVICES ---
  {
    id: "srv-silver",
    mainCategory: "services",
    subCategory: "silver_package",
    badge: "Silver Package",
    priceTRY: 580,
    duration: 60,
    icon: "sparkles",
    image: "./src/images/vip_silver_package.webp",
    title: {
      tr: "Gümüş Paket (Silver Package) - 60 DK",
      en: "Silver Package - 60 Min",
      ru: "Серебряный Пакет (Silver Package) - 60 мин",
      de: "Silver Paket (Silber-Paket) - 60 Min"
    },
    shortDesc: {
      tr: "60 dakikalık hızlı & ferahlatıcı hamam yenilenmesi. Sauna, Buhar Odası, Jakuzi, Türk Hamamı, Kese, Köpük Masajı, 5 dk Dinlenme ve 20 dk Tüm Vücut Masajı.",
      en: "Relax your body and mind in just 1 hour! Sauna, Steam Room, Jacuzzi, Turkish Bath, Scrub (kese), Foam Massage, 5 Min Relaxation Area & 20 Min Full Body Massage.",
      ru: "Расслабление тела и ума всего за 1 час! Сауна, парная, джакузи, хамам, пилинг кесе, пенный массаж, 5 мин отдыха и 20 мин массаж всего тела.",
      de: "Erholung für Körper und Geist in nur 1 Stunde! Sauna, Dampfbad, Whirlpool, Türkisches Bad, Kese-Peeling, Schaummassage, 5 Min Ruhebereich & 20 Min Ganzkörpermassage."
    },
    longDesc: {
      tr: "Uçuş sonrası veya plaj günü ardından tazelenmek isteyenler için ideal 1 saatlik hızlı yenilenme paketi. Cedar ağacı saunası ve nemli buhar odasında kasların gevşemesi ile başlayan ritüel, jakuzi rahatlaması ve mermer göbek taşında geleneksel kese & köpük yıkaması ile devam eder. 5 dakikalık nefes dinlenme molasının ardından 20 dakikalık tüm vücut masajı ile gerginliğiniz tamamen giderilir.",
      en: "Relax your body and mind in just 1 hour! Ideal for those who want to refresh after a long flight or a sunny beach day. Let all the stress melt away in a peaceful, authentic atmosphere. Includes warm cedar sauna, steam room, jacuzzi, traditional Turkish bath with full-body kese scrub & foam wash, 5 minutes pause in relaxation area, and a soothing 20-minute full body massage.",
      ru: "Идеально подходит для тех, кто хочет освежиться после долгого перелета или дня на пляже. Снимите весь стресс в спокойной аутентичной атмосфере. Включает кедровую сауну, парную, джакузи, традиционный хамам с пилингом кесе и пенным массажем, 5 минут отдыха и 20 минут расслабляющего массажа всего тела.",
      de: "Entspannen Sie Körper und Geist in nur 1 Stunde! Ideal zum Erfrischen nach einem langen Flug oder Strandtag. Lassen Sie den Stress in friedlicher Atmosphäre schmelzen. Inklusive Zedernholz-Sauna, Dampfbad, Whirlpool, traditionellem Hamam mit Kese-Peeling & Schaumbad, 5 Min Ruhebereich und 20 Min Ganzkörpermassage."
    },
    included: {
      tr: [
        "1. Sauna (Ahşap sedir sıcaklığı ile kasları gevşetme)",
        "2. Buhar Odası (Nemli sıcaklık & solunum tazeleme)",
        "3. Jakuzi (Sıcak su masaj jetleri ile rahatlama)",
        "4. Türk Hamamı (Isıtılmış mermer göbek taşı ritüeli)",
        "5. Kese (Tüm vücut ölü deri arındırma)",
        "6. Köpük Masajı (Bol sabun köpüğü ile yıkanma)",
        "7. Dinlenme Alanı (5 Dakikalık nefes molası)",
        "8. 20 Dakika Tüm Vücut Masajı (Kas gerginliğini giderici masaj)"
      ],
      en: [
        "1. Sauna (Warm cedar heat to open the body)",
        "2. Steam room (Gentle moist heat to relax muscles)",
        "3. Jacuzzi (Warm water jets ease tension)",
        "4. Turkish bath (Traditional hammam ritual on marble stone)",
        "5. Scrub (kese) (Full-body exfoliation)",
        "6. Foam massage (Soft soapy wash-down)",
        "7. Relaxation area (5 minutes pause to breathe)",
        "8. 20 Minutes Full Body Massage (Calming massage to release tension)"
      ],
      ru: [
        "1. Сауна (Кедровая сауна для разогрева)",
        "2. Парная (Влажный пар для очищения поров)",
        "3. Джакузи (Массажные водные струи)",
        "4. Турецкий хамам (Ритуал на теплом мраморе)",
        "5. Пилинг (Кесе) (Очищение кожи всего тела)",
        "6. Пенный массаж (Пенный уход с оливковым мылом)",
        "7. Зона отдыха (5 минут паузы)",
        "8. 20 Минут Массаж всего тела (Снятие напряжения)"
      ],
      de: [
        "1. Sauna (Zedernholzwärme zum Muskelentspannen)",
        "2. Dampfbad (Sanfte feuchte Wärme)",
        "3. Whirlpool (Warmwasser-Jets)",
        "4. Türkisches Bad (Marmorstein-Ritual)",
        "5. Peeling (Kese) (Ganzkörper-Peeling)",
        "6. Schaummassage (Weiches Schaumbad)",
        "7. Ruhebereich (5 Minuten Pause)",
        "8. 20 Minuten Ganzkörpermassage (Entspannungsmassage)"
      ]
    }
  },
  {
    id: "srv-gold",
    mainCategory: "services",
    subCategory: "gold_package",
    badge: "Gold Package (Popüler)",
    priceTRY: 1730,
    duration: 90,
    icon: "crown",
    image: "./src/images/vip_gold_package.webp",
    title: {
      tr: "Gold Paket (Gold Package) - 90 / 120 DK",
      en: "Gold Package - 90 / 120 Min",
      ru: "Золотой Пакет (Gold Package) - 90 / 120 мин",
      de: "Gold Paket (Gold-Paket) - 90 / 120 Min"
    },
    shortDesc: {
      tr: "Derinlemesine lüks spa ve hamam yenilenmesi. Sauna, Buhar Odası, Jakuzi, Türk Hamamında Kese, Kahve / Tuz Peeling, Köpük Masajı, Çay & Meyve İkramı, 10 dk Ayak Masajı, 1 Saat Mix Terapi Vücut Masajı ve Gold Yüz Maskesi.",
      en: "A full-body renewal experience! Sauna, Steam Room, Jacuzzi, Turkish Bath Scrub (kese), Salt/Coffee Peeling, Foam Massage, Tea & Fruit in Relax Area, 10 Min Foot Massage, 1 Hour Mix Therapy Full Body Massage & Gold Mask.",
      ru: "Королевское обновление всего тела! Сауна, парная, джакузи, хамам, пилинг (кесе), солевой/кофейный скраб, пенный массаж, чай и фрукты, 10 мин массаж ног, 1 час микс-массаж и золотая маска.",
      de: "Exklusives Ganzkörper-Verwöhnerlebnis! Sauna, Dampfbad, Whirlpool, Türkisches Bad, Peeling (Kese), Salz/Kaffee-Peeling, Schaummassage, Tee & Früchte im Ruhebereich, 10 Min Fußmassage, 1 Std. Mix-Therapie Massage & Goldmaske."
    },
    longDesc: {
      tr: "History Hamam'ın en popüler ve kapsamlı lüks paket deneyimi. Ahşap sedir saunası, buhar odası ve jakuzide vücudun tamamen gevşetilmesinin ardından ısıtılmış göbek taşında geleneksel ipek kese ve cildi pürüzsüzleştiren kahve/tuz peelingi uygulanır. Bol sabun köpüğü masajının ardından dinlenme alanımızda taze meyve ve sıcak çay ikram edilir. Ardından 10 dakikalık rahatlatıcı ayak masajı, 1 saatlik (90 dk opsiyonlu) medikal mix terapisi tüm vücut masajı ve ışıltı kazandıran Gold yüz maskesi ile mükemmel spa yolculuğunuz tamamlanır.",
      en: "A full-body renewal experience. Enjoy deep relaxation with natural treatments and luxurious care. Perfect for couples or guests looking for a premium spa experience. Includes cedar sauna, steam room, jacuzzi, heated marble Turkish bath, silk kese scrub, mineral salt/coffee peeling, soft foam massage, tea & fruit in relax area, 10 minutes foot massage, 1 hour Mix Therapy Full Body Massage, and a gold mask to finish your journey.",
      ru: "Комплексный премиальный СПА-ритуал для полного восстановления сил. Отлично подходит для пар и ценителей высокого уровня отдыха. Включает сауну, парную, джакузи, традиционный хамам на мраморе, пилинг кесе, солевой/кофейный скраб, пенный массаж, фрукты и чай в зоне отдыха, 10 минут массажа ног, 1 час комплексного массажа тела (Mix Therapy) и золотую маску для лица.",
      de: "Ein vollständiges Verwöhnerlebnis für Körper und Geist. Genießen Sie tiefste Entspannung mit natürlichen Behandlungen. Inklusive Zedernholz-Sauna, Dampfbad, Whirlpool, Türkischem Bad auf dem Marmorstein, Seidenkese, Salz/Kaffee-Peeling, Schaummassage, Tee & frischen Früchten im Ruhebereich, 10 Minuten Fußmassage, 1 Stunde Mix-Therapie Ganzkörpermassage und einer strahlenden Gold-Gesichtsmaske."
    },
    included: {
      tr: [
        "1. Sauna (Ahşap sedir sıcaklığı ile gevşeme)",
        "2. Buhar Odası (Nemli sıcaklık & kas rahatlatma)",
        "3. Jakuzi (Sıcak su masaj jetleri ile gerginlik giderme)",
        "4. Türk Hamamı (Geleneksel mermer göbek taşı ritüeli)",
        "5. Kese (Tüm vücut ölü deri arındırma)",
        "6. Kahve & Tuz Peeling (Cildi pürüzsüzleştiren mineral peeling)",
        "7. Köpük Masajı (Saf sabun köpüğü yıkaması)",
        "8. Dinlenme Alanında İkram (Çay ve taze meyve ikramı)",
        "9. 10 Dakika Ayak Masajı (Yorgun ayakları rahatlatıcı masaj)",
        "10. 1 Saat Mix Terapi / Medikal Vücut Masajı (Tüm vücut masajı)",
        "11. Gold Yüz Maskesi (Cilde ışıltı kazandıran altın maske)"
      ],
      en: [
        "1. Sauna (Warm cedar heat to open the body and begin unwinding)",
        "2. Steam room (Gentle moist heat to relax muscles)",
        "3. Jacuzzi (Warm water jets ease tension through whole body)",
        "4. Turkish bath (Traditional hammam ritual on heated marble stone)",
        "5. Scrub (kese) (Full-body exfoliation to refresh and soften skin)",
        "6. Salt / Coffee Peeling (Mineral-rich scrub to smooth and renew skin)",
        "7. Foam massage (Soft soapy wash-down)",
        "8. Tea & Fruit in Relax Area (Unwind with tea and fresh fruit)",
        "9. 10 Minutes Foot Massage (Soothing massage to relieve tired feet)",
        "10. 1 Hour Mix Therapy Full Body Massage (Comprehensive full-body massage blending techniques)",
        "11. Gold Mask (Radiance-boosting gold mask to finish your journey)"
      ],
      ru: [
        "1. Сауна (Кедровая сауна для расслабления)",
        "2. Парная (Влажный пар для мышц)",
        "3. Джакузи (Водные струи для снятия напряжения)",
        "4. Турецкий хамам (Ритуал на теплом мраморе)",
        "5. Пилинг (Кесе) (Глубокое очищение кожи)",
        "6. Кофейно-солевой пилинг (Обновление и гладкость кожи)",
        "7. Пенный массаж (Пенное умывание)",
        "8. Чай и фрукты в зоне отдыха (Отдых и угощение)",
        "9. 10 Минут Массаж ног (Расслабление уставших ног)",
        "10. 1 Час Микс-Терапевтический Массаж (Массаж всего тела)",
        "11. Золотая Маска (Омолаживающая золотая маска)"
      ],
      de: [
        "1. Sauna (Zedernholzwärme zum Entspannen)",
        "2. Dampfbad (Sanfte feuchte Wärme)",
        "3. Whirlpool (Warmwasser-Jets)",
        "4. Türkisches Bad (Marmorstein-Ritual)",
        "5. Peeling (Kese) (Ganzkörper-Hautreinigung)",
        "6. Salz- & Kaffee-Peeling (Mineral-Peeling)",
        "7. Schaummassage (Weiches Schaumbad)",
        "8. Tee & Früchte im Ruhebereich (Erfrischende Pause)",
        "9. 10 Minuten Fußmassage (Wohltuende Fußpflege)",
        "10. 1 Std. Mix-Therapie Ganzkörpermassage (Intensive Ganzkörpermassage)",
        "11. Gold-Gesichtsmaske (Strahlende Goldmaske)"
      ]
    }
  },
  {
    id: "srv-luxury",
    mainCategory: "services",
    subCategory: "luxury_package",
    badge: "✦ VIP Luxury",
    priceTRY: 2310,
    duration: 150,
    icon: "gem",
    image: "./src/images/vip_luxury_package.webp",
    title: {
      tr: "Luxury Paket (Diamond) - 150 DK",
      en: "Luxury Package (Diamond) - 150 Min",
      ru: "Люкс Пакет (Diamond) - 150 мин",
      de: "Luxury Paket (Diamond) - 150 Min"
    },
    shortDesc: {
      tr: "En üst düzey VIP hamam & spa deneyimi. Sauna, Buhar Odası, Jakuzi, Türk Hamamı, Kese, Kahve/Tuz Peeling, Köpük Masajı, Çay & Meyve İkramı, Ayak Masajı, 1 Saat Mix Terapi Masajı, Gold Yüz Maskesi, Aromaterapi Yağ Masajı ve VIP Dinlenme.",
      en: "The ultimate VIP hammam & spa experience. Sauna, Steam Room, Jacuzzi, Turkish Bath, Kese Scrub, Salt/Coffee Peeling, Foam Massage, Tea & Fruit Service, Foot Massage, 1 Hour Mix Therapy Massage, Gold Face Mask, Aromatherapy Oil Massage & VIP Relaxation.",
      ru: "Ультра-люксовый VIP-ритуал хамама и СПА. Сауна, парная, джакузи, хамам, пилинг кесе, кофейно-солевой скраб, пенный массаж, чай и фрукты, массаж ног, 1 час микс-массаж, золотая маска, аромамассаж и VIP-зона.",
      de: "Das ultimative VIP-Hamam & Spa-Erlebnis. Sauna, Dampfbad, Whirlpool, Türkisches Bad, Kese-Peeling, Salz/Kaffee-Peeling, Schaummassage, Tee & Obst, Fußmassage, 1 Std. Mix-Therapie, Goldmaske, Aromatherapie-Ölmassage & VIP-Ruhebereich."
    },
    longDesc: {
      tr: "History Hamam'ın en prestijli ve kapsamlı VIP deneyimi. 2.5 saatlik bu özel ritüelde, tüm Gold Paket hizmetlerine ek olarak aromaterapi yağı ile derin kas masajı, genişletilmiş VIP dinlenme süresi ve özel ikramlar sunulur. Saray hamamlarından ilham alan bu deneyim, baştan sona lüks ve huzur vaat eder. Çay, taze meyve ve soğuk içecek ikramımız dahildir.",
      en: "History Hamam's most prestigious and comprehensive VIP experience. This exclusive 2.5-hour ritual includes everything in the Gold Package plus deep aromatherapy oil massage, extended VIP relaxation time, and exclusive refreshments. Inspired by Ottoman palace hammams, this experience promises luxury and tranquility from start to finish. Tea, fresh fruit and cold beverage service included.",
      ru: "Самый престижный и комплексный VIP-ритуал History Hamam. 2,5-часовой эксклюзивный ритуал включает всё из Золотого пакета, плюс глубокий массаж с ароматическими маслами, расширенную VIP-зону отдыха и эксклюзивные угощения. Чай, фрукты и прохладительные напитки включены.",
      de: "History Hamams prestigeträchtigstes VIP-Erlebnis. Dieses exklusive 2,5-Stunden-Ritual beinhaltet alles aus dem Gold-Paket plus Tiefenentspannungs-Aromatherapie-Massage, erweiterte VIP-Ruhezeit und exklusive Erfrischungen. Tee, frisches Obst und Kaltgetränkeservice inklusive."
    },
    included: {
      tr: [
        "1. Sauna (Ahşap sedir sıcaklığı ile derin gevşeme)",
        "2. Buhar Odası (Nemli sıcaklık & kas rahatlatma)",
        "3. Jakuzi (Sıcak su masaj jetleri ile gerginlik giderme)",
        "4. Türk Hamamı (Geleneksel mermer göbek taşı ritüeli)",
        "5. Kese (Tüm vücut ölü deri arındırma)",
        "6. Kahve & Tuz Peeling (Cildi pürüzsüzleştiren mineral peeling)",
        "7. Köpük Masajı (Saf sabun köpüğü yıkaması)",
        "8. Çay & Meyve İkramı (Dinlenme alanında sıcak çay ve taze meyve)",
        "9. 10 Dakika Ayak Masajı (Yorgun ayakları rahatlatıcı masaj)",
        "10. 1 Saat Mix Terapi Vücut Masajı (Tüm vücut derin doku masajı)",
        "11. Gold Yüz Maskesi (Cilde ışıltı kazandıran altın maske)",
        "12. Aromaterapi Yağ Masajı (Rahatlatıcı doğal yağlarla özel masaj)",
        "13. VIP Dinlenme Alanı (Genişletilmiş özel dinlenme süresi)",
        "14. Soğuk İçecek İkramı (Su ve soda dahil)"
      ],
      en: [
        "1. Sauna (Deep relaxation in warm cedar heat)",
        "2. Steam Room (Gentle moist heat to relax muscles)",
        "3. Jacuzzi (Warm water jets ease tension through whole body)",
        "4. Turkish Bath (Traditional hammam ritual on heated marble stone)",
        "5. Scrub (Kese) (Full-body exfoliation to refresh and soften skin)",
        "6. Salt / Coffee Peeling (Mineral-rich scrub to smooth and renew skin)",
        "7. Foam Massage (Luxurious soapy wash-down)",
        "8. Tea & Fruit Service (Hot tea and fresh seasonal fruit in relax area)",
        "9. 10 Minutes Foot Massage (Soothing massage to relieve tired feet)",
        "10. 1 Hour Mix Therapy Full Body Massage (Deep tissue full-body massage)",
        "11. Gold Face Mask (Radiance-boosting gold mask)",
        "12. Aromatherapy Oil Massage (Relaxing massage with natural aromatic oils)",
        "13. VIP Relaxation Area (Extended private relaxation time)",
        "14. Cold Beverage Service (Water and soda included)"
      ],
      ru: [
        "1. Сауна (Глубокое расслабление в кедровой сауне)",
        "2. Парная (Влажный пар для мышц)",
        "3. Джакузи (Массажные водные струи)",
        "4. Турецкий хамам (Ритуал на теплом мраморе)",
        "5. Пилинг (Кесе) (Глубокое очищение всего тела)",
        "6. Кофейно-солевой пилинг (Обновление кожи)",
        "7. Пенный массаж (Роскошное пенное умывание)",
        "8. Чай и фрукты (Горячий чай и свежие фрукты)",
        "9. 10 Минут Массаж ног (Расслабление уставших ног)",
        "10. 1 Час Микс-Терапевтический Массаж (Глубокий массаж тела)",
        "11. Золотая Маска (Омолаживающая золотая маска)",
        "12. Аромамассаж (Расслабляющий массаж натуральными маслами)",
        "13. VIP Зона Отдыха (Расширенная приватная зона)",
        "14. Холодные Напитки (Вода и содовая включены)"
      ],
      de: [
        "1. Sauna (Tiefenentspannung in Zedernholzwärme)",
        "2. Dampfbad (Sanfte feuchte Wärme)",
        "3. Whirlpool (Warmwasser-Jets)",
        "4. Türkisches Bad (Marmorstein-Ritual)",
        "5. Peeling (Kese) (Ganzkörper-Hautreinigung)",
        "6. Salz- & Kaffee-Peeling (Mineral-Peeling)",
        "7. Schaummassage (Luxuriöses Schaumbad)",
        "8. Tee & Obst (Heißer Tee und frisches Obst)",
        "9. 10 Min Fußmassage (Wohltuende Fußpflege)",
        "10. 1 Std. Mix-Therapie Ganzkörpermassage (Tiefengewebsmassage)",
        "11. Gold-Gesichtsmaske (Strahlende Goldmaske)",
        "12. Aromatherapie-Ölmassage (Entspannung mit natürlichen Ölen)",
        "13. VIP-Ruhebereich (Erweiterte private Ruhezeit)",
        "14. Kaltgetränke-Service (Wasser und Soda inklusive)"
      ]
    }
  },

  // --- SPA & CARE PRODUCTS ---
  {
    id: "prd-1",
    mainCategory: "spa_products",
    subCategory: "oils",
    badge: "Aromatherapy",
    priceTRY: 500,
    icon: "droplet",
    image: "./src/images/vip_aromatherapy_oil.webp",
    title: {
      tr: "Aromatherapy Oil",
      en: "Aromatherapy Oil",
      ru: "Ароматерапевтическое Масло",
      de: "Aromatherapie-Öl"
    },
    shortDesc: {
      tr: "Rahatlatıcı ve ferahlatıcı doğal aromaterapi yağı. Masaj ve cilt bakımı için idealdir.",
      en: "Relaxing and refreshing natural aromatherapy oil. Ideal for massage and skincare.",
      ru: "Расслабляющее натуральное масло для ароматерапии. Идеально для массажа.",
      de: "Entspannendes natürliches Aromatherapie-Öl. Ideal für Massage und Hautpflege."
    },
    longDesc: {
      tr: "Doğal bitkisel özlerden elde edilen aromaterapi yağı, vücudu rahatlatır ve zihni dinlendirir. Masaj sırasında veya banyo sonrası kullanılabilir.",
      en: "Derived from natural herbal extracts, this aromatherapy oil relaxes the body and calms the mind. Can be used during massage or after bathing.",
      ru: "Масло из натуральных растительных экстрактов расслабляет тело и успокаивает разум.",
      de: "Aus natürlichen Pflanzenextrakten gewonnenes Öl entspannt Körper und Geist."
    },
    included: {
      tr: ["Doğal Bitkisel Özler", "Rahatlatıcı Aroma", "Cilt Bakımına Uygun"],
      en: ["Natural Herbal Extracts", "Relaxing Aroma", "Suitable for Skincare"],
      ru: ["Натуральные экстракты", "Расслабляющий аромат", "Для ухода за кожей"],
      de: ["Natürliche Extrakte", "Entspannender Duft", "Hautpflegegeeignet"]
    }
  },
  {
    id: "prd-2",
    mainCategory: "spa_products",
    subCategory: "creams",
    badge: "Cooling",
    priceTRY: 400,
    icon: "snowflake",
    image: "./src/images/vip_crystal_menthol.webp",
    title: {
      tr: "Crystal Mentol",
      en: "Crystal Menthol",
      ru: "Кристальный Ментол",
      de: "Kristall-Menthol"
    },
    shortDesc: {
      tr: "Saf kristal mentol. Serinletici ve ferahlatıcı etki sağlar, kas ağrılarını hafifletir.",
      en: "Pure crystal menthol. Provides cooling and refreshing effect, relieves muscle pain.",
      ru: "Чистый кристаллический ментол. Охлаждающий и освежающий эффект.",
      de: "Reines Kristall-Menthol. Kühlende und erfrischende Wirkung."
    },
    longDesc: {
      tr: "Doğal kristal mentol, masaj uygulamalarında ve cilt bakımında kullanılır. Kas gerginliğini azaltır ve ferahlık hissi verir.",
      en: "Natural crystal menthol used in massage applications and skincare. Reduces muscle tension and provides a refreshing sensation.",
      ru: "Натуральный кристаллический ментол для массажа и ухода за кожей. Снимает мышечное напряжение.",
      de: "Natürliches Kristall-Menthol für Massage und Hautpflege. Reduziert Muskelverspannungen."
    },
    included: {
      tr: ["Saf Kristal Mentol", "Serinletici Etki", "Kas Rahatlatıcı"],
      en: ["Pure Crystal Menthol", "Cooling Effect", "Muscle Relief"],
      ru: ["Чистый ментол", "Охлаждающий эффект", "Расслабление мышц"],
      de: ["Reines Menthol", "Kühleffekt", "Muskelentspannung"]
    }
  },
  {
    id: "prd-3",
    mainCategory: "spa_products",
    subCategory: "creams",
    badge: "Medical",
    priceTRY: 600,
    icon: "heart-pulse",
    image: "./src/images/vip_medical_cream.webp",
    title: {
      tr: "Medical Cream",
      en: "Medical Cream",
      ru: "Медицинский Крем",
      de: "Medizinische Creme"
    },
    shortDesc: {
      tr: "Profesyonel medikal masaj kremi. Derin doku masajı ve kas terapisi için özel formül.",
      en: "Professional medical massage cream. Special formula for deep tissue massage and muscle therapy.",
      ru: "Профессиональный медицинский массажный крем для глубокого массажа тканей.",
      de: "Professionelle medizinische Massagecreme für Tiefengewebsmassage."
    },
    longDesc: {
      tr: "Medikal formüllü masaj kremi, profesyonel terapistler tarafından derin doku masajı ve kas terapisinde kullanılır. Kas ağrılarını hafifletir ve iyileşme sürecini destekler.",
      en: "Medical formula massage cream used by professional therapists for deep tissue massage and muscle therapy. Relieves muscle pain and supports recovery.",
      ru: "Массажный крем медицинской формулы для профессионального использования в глубоком массаже тканей.",
      de: "Medizinische Massagecreme für professionelle Tiefengewebsmassage und Muskeltherapie."
    },
    included: {
      tr: ["Medikal Formül", "Derin Doku Masajı İçin", "Profesyonel Kullanım"],
      en: ["Medical Formula", "For Deep Tissue Massage", "Professional Use"],
      ru: ["Медицинская формула", "Для глубокого массажа", "Профессиональное использование"],
      de: ["Medizinische Formel", "Für Tiefenmassage", "Professioneller Einsatz"]
    }
  },
  {
    id: "prd-4",
    mainCategory: "spa_products",
    subCategory: "serums",
    badge: "Serum",
    priceTRY: 550,
    icon: "flask-round",
    image: "./src/images/vip_aromatherapy_serum.webp",
    title: {
      tr: "Aromatherapy Serum",
      en: "Aromatherapy Serum",
      ru: "Ароматерапевтическая Сыворотка",
      de: "Aromatherapie-Serum"
    },
    shortDesc: {
      tr: "Aromaterapi özlü konsantre cilt bakım serumu. Cildi besler ve yeniler.",
      en: "Concentrated aromatherapy skin care serum. Nourishes and revitalizes the skin.",
      ru: "Концентрированная сыворотка для ароматерапии. Питает и обновляет кожу.",
      de: "Konzentriertes Aromatherapie-Hautpflegeserum. Nährt und revitalisiert die Haut."
    },
    longDesc: {
      tr: "Doğal aromaterapi özleri ile zenginleştirilmiş konsantre serum. Cilde derinlemesine nüfuz ederek besler, nemlendirir ve yeniler.",
      en: "Concentrated serum enriched with natural aromatherapy extracts. Deeply penetrates the skin to nourish, hydrate and revitalize.",
      ru: "Концентрированная сыворотка с натуральными экстрактами ароматерапии. Глубоко проникает в кожу.",
      de: "Konzentriertes Serum mit natürlichen Aromatherapie-Extrakten. Dringt tief in die Haut ein."
    },
    included: {
      tr: ["Aromaterapi Özleri", "Konsantre Formül", "Derin Besleyici"],
      en: ["Aromatherapy Extracts", "Concentrated Formula", "Deep Nourishing"],
      ru: ["Экстракты ароматерапии", "Концентрированная формула", "Глубокое питание"],
      de: ["Aromatherapie-Extrakte", "Konzentrierte Formel", "Tiefenpflege"]
    }
  },
  {
    id: "prd-5",
    mainCategory: "spa_products",
    subCategory: "serums",
    badge: "Anti-Age",
    priceTRY: 700,
    icon: "sparkles",
    image: "./src/images/vip_collagen_serum.webp",
    title: {
      tr: "Kolajen Serum",
      en: "Collagen Serum",
      ru: "Коллагеновая Сыворотка",
      de: "Kollagen-Serum"
    },
    shortDesc: {
      tr: "Kolajen destekli yaşlanma karşıtı serum. Cildi sıkılaştırır ve elastikiyet kazandırır.",
      en: "Collagen-boosted anti-aging serum. Firms the skin and improves elasticity.",
      ru: "Антивозрастная сыворотка с коллагеном. Подтягивает кожу и повышает эластичность.",
      de: "Kollagen-Anti-Aging-Serum. Strafft die Haut und verbessert die Elastizität."
    },
    longDesc: {
      tr: "Yüksek konsantrasyonlu kolajen serum, cildin doğal kolajen üretimini destekler. Kırışıklıkları azaltır, cildi sıkılaştırır ve genç bir görünüm kazandırır.",
      en: "High-concentration collagen serum supports the skin's natural collagen production. Reduces wrinkles, firms the skin and gives a youthful appearance.",
      ru: "Высококонцентрированная коллагеновая сыворотка поддерживает выработку коллагена. Уменьшает морщины.",
      de: "Hochkonzentriertes Kollagen-Serum unterstützt die natürliche Kollagenproduktion der Haut."
    },
    included: {
      tr: ["Yüksek Kolajen Konsantrasyonu", "Yaşlanma Karşıtı", "Sıkılaştırıcı Etki"],
      en: ["High Collagen Concentration", "Anti-Aging", "Firming Effect"],
      ru: ["Высокая концентрация коллагена", "Антивозрастной", "Подтягивающий эффект"],
      de: ["Hohe Kollagenkonzentration", "Anti-Aging", "Straffender Effekt"]
    }
  },
  {
    id: "prd-6",
    mainCategory: "spa_products",
    subCategory: "serums",
    badge: "Doğal",
    priceTRY: 650,
    icon: "bug",
    image: "./src/images/vip_snail_serum.webp",
    title: {
      tr: "Snail Serum",
      en: "Snail Serum",
      ru: "Сыворотка с Улиткой",
      de: "Schnecken-Serum"
    },
    shortDesc: {
      tr: "Salyangoz özlü onarıcı serum. Cilt yenilenme sürecini hızlandırır ve leke giderici etki sağlar.",
      en: "Snail extract repair serum. Accelerates skin renewal and provides spot-correcting effect.",
      ru: "Восстанавливающая сыворотка с экстрактом улитки. Ускоряет обновление кожи.",
      de: "Schneckenextrakt-Reparaturserum. Beschleunigt die Hauterneuerung."
    },
    longDesc: {
      tr: "Salyangoz müsilajı özünden elde edilen bu serum, cildin doğal onarım sürecini destekler. Leke ve izleri azaltır, cildi yumuşatır ve nemlendirir.",
      en: "Derived from snail mucin extract, this serum supports the skin's natural repair process. Reduces spots and marks, softens and moisturizes the skin.",
      ru: "Сыворотка на основе муцина улитки поддерживает процесс восстановления кожи.",
      de: "Aus Schneckenmuzin gewonnenes Serum unterstützt den natürlichen Reparaturprozess der Haut."
    },
    included: {
      tr: ["Salyangoz Müsilajı Özü", "Onarıcı Formül", "Leke Giderici"],
      en: ["Snail Mucin Extract", "Repair Formula", "Spot Corrector"],
      ru: ["Экстракт улитки", "Восстанавливающая формула", "Коррекция пятен"],
      de: ["Schneckenmuzin-Extrakt", "Reparaturformel", "Fleckenkorrektur"]
    }
  },
  {
    id: "prd-7",
    mainCategory: "spa_products",
    subCategory: "serums",
    badge: "Nemlendirici",
    priceTRY: 650,
    icon: "droplets",
    image: "./src/images/vip_hyaluronic_serum.webp",
    title: {
      tr: "Hyaluronic Serum",
      en: "Hyaluronic Serum",
      ru: "Гиалуроновая Сыворотка",
      de: "Hyaluron-Serum"
    },
    shortDesc: {
      tr: "Hyalüronik asit bazlı yoğun nemlendirici serum. Cildi derinlemesine nemlendirir ve dolgunlaştırır.",
      en: "Hyaluronic acid based intensive moisturizing serum. Deeply hydrates and plumps the skin.",
      ru: "Интенсивная увлажняющая сыворотка на основе гиалуроновой кислоты.",
      de: "Hyaluronsäure-basiertes intensives Feuchtigkeitsserum."
    },
    longDesc: {
      tr: "Düşük ve yüksek molekül ağırlıklı hyalüronik asit kombinasyonu ile cildi her katmanda nemlendirir. Kuru ve susuz cildi canlandırır, ince çizgileri azaltır.",
      en: "Hydrates the skin at every layer with a combination of low and high molecular weight hyaluronic acid. Revitalizes dry skin and reduces fine lines.",
      ru: "Увлажняет кожу на каждом уровне комбинацией гиалуроновой кислоты разного молекулярного веса.",
      de: "Versorgt die Haut auf jeder Ebene mit Feuchtigkeit durch eine Kombination von Hyaluronsäuren."
    },
    included: {
      tr: ["Hyalüronik Asit", "Yoğun Nemlendirici", "İnce Çizgi Azaltıcı"],
      en: ["Hyaluronic Acid", "Intensive Moisturizer", "Fine Line Reducer"],
      ru: ["Гиалуроновая кислота", "Интенсивное увлажнение", "Уменьшение морщин"],
      de: ["Hyaluronsäure", "Intensive Feuchtigkeitspflege", "Faltenreduktion"]
    }
  },
  {
    id: "prd-8",
    mainCategory: "spa_products",
    subCategory: "creams",
    badge: "Massage",
    priceTRY: 550,
    icon: "hand",
    image: "./src/images/vip_smart_massage_cream.webp",
    title: {
      tr: "Smart Massage Cream",
      en: "Smart Massage Cream",
      ru: "Умный Массажный Крем",
      de: "Smart Massage-Creme"
    },
    shortDesc: {
      tr: "Akıllı formüllü masaj kremi. Kas gevşetici ve cilt besleyici özellikli profesyonel krem.",
      en: "Smart formula massage cream. Professional cream with muscle relaxing and skin nourishing properties.",
      ru: "Массажный крем с умной формулой. Расслабляет мышцы и питает кожу.",
      de: "Massagecreme mit intelligenter Formel. Muskelentspannend und hautnährend."
    },
    longDesc: {
      tr: "Özel formülü sayesinde masaj sırasında ciltte ideal kayganllk sağlarken aynı zamanda cildi besler. Kas gerginliğini azaltır ve rahatlatıcı etki yapar.",
      en: "Thanks to its special formula, it provides ideal glide on the skin during massage while nourishing the skin. Reduces muscle tension and provides a relaxing effect.",
      ru: "Обеспечивает идеальное скольжение при массаже, одновременно питая кожу.",
      de: "Bietet ideales Gleiten bei der Massage und nährt gleichzeitig die Haut."
    },
    included: {
      tr: ["Akıllı Formül", "Kas Gevşetici", "Cilt Besleyici"],
      en: ["Smart Formula", "Muscle Relaxant", "Skin Nourishing"],
      ru: ["Умная формула", "Расслабление мышц", "Питание кожи"],
      de: ["Intelligente Formel", "Muskelentspannung", "Hauternährung"]
    }
  },
  {
    id: "prd-9",
    mainCategory: "spa_products",
    subCategory: "sets",
    badge: "Set",
    priceTRY: 1200,
    icon: "package",
    image: "./src/images/vip_products_banner.webp",
    title: {
      tr: "Face Routine Set",
      en: "Face Routine Set",
      ru: "Набор для Ухода за Лицом",
      de: "Gesichtspflege-Set"
    },
    shortDesc: {
      tr: "Komple yüz bakım seti. Temizleyici, tonik, serum ve nemlendirici içerir.",
      en: "Complete face care set. Includes cleanser, toner, serum and moisturizer.",
      ru: "Полный набор для ухода за лицом. Очищающее средство, тоник, сыворотка и увлажняющий крем.",
      de: "Komplettes Gesichtspflege-Set mit Reiniger, Toner, Serum und Feuchtigkeitscreme."
    },
    longDesc: {
      tr: "Günlük yüz bakım rutininiz için ihtiyacınız olan tüm ürünleri içeren kapsamlı set. Cildinizi temizler, tonlar, besler ve nemlendirir.",
      en: "Comprehensive set containing all the products you need for your daily face care routine. Cleanses, tones, nourishes and moisturizes your skin.",
      ru: "Комплексный набор со всеми продуктами для ежедневного ухода за лицом.",
      de: "Umfassendes Set mit allen Produkten für Ihre tägliche Gesichtspflegeroutine."
    },
    included: {
      tr: ["Yüz Temizleyici", "Tonik", "Bakım Serumu", "Nemlendirici Krem"],
      en: ["Face Cleanser", "Toner", "Care Serum", "Moisturizer"],
      ru: ["Очищающее средство", "Тоник", "Сыворотка", "Увлажняющий крем"],
      de: ["Gesichtsreiniger", "Toner", "Pflegeserum", "Feuchtigkeitscreme"]
    }
  },
  {
    id: "prd-10",
    mainCategory: "spa_products",
    subCategory: "serums",
    badge: "Vitamin C",
    priceTRY: 600,
    icon: "citrus",
    image: "./src/images/vip_collagen_serum.webp",
    title: {
      tr: "Pomegranate Serum",
      en: "Pomegranate Serum",
      ru: "Гранатовая Сыворотка",
      de: "Granatapfel-Serum"
    },
    shortDesc: {
      tr: "Nar özlü antioksidan serum. Cildi aydınlatır, korur ve gençleştirir.",
      en: "Pomegranate extract antioxidant serum. Brightens, protects and rejuvenates the skin.",
      ru: "Антиоксидантная сыворотка с экстрактом граната. Осветляет и омолаживает кожу.",
      de: "Granatapfel-Antioxidans-Serum. Hellt die Haut auf und verjüngt sie."
    },
    longDesc: {
      tr: "Nar özünün zengin antioksidan içeriği ile cildi serbest radikallere karşı korur. Cilt tonunu eşitler, parlaklık kazandırır ve yaşlanma belirtilerini azaltır.",
      en: "Protects the skin against free radicals with the rich antioxidant content of pomegranate extract. Evens skin tone, adds radiance and reduces signs of aging.",
      ru: "Защищает кожу от свободных радикалов благодаря антиоксидантам экстракта граната.",
      de: "Schützt die Haut mit den Antioxidantien des Granatapfels vor freien Radikalen."
    },
    included: {
      tr: ["Nar Özü", "Antioksidan Koruma", "Aydınlatıcı Etki"],
      en: ["Pomegranate Extract", "Antioxidant Protection", "Brightening Effect"],
      ru: ["Экстракт граната", "Антиоксидантная защита", "Осветляющий эффект"],
      de: ["Granatapfel-Extrakt", "Antioxidativer Schutz", "Aufhellender Effekt"]
    }
  },
  {
    id: "prd-11",
    mainCategory: "spa_products",
    subCategory: "oils",
    badge: "Organik",
    priceTRY: 650,
    icon: "droplet",
    image: "./src/images/vip_aromatherapy_oil.webp",
    title: {
      tr: "Argan Serum",
      en: "Argan Serum",
      ru: "Аргановая Сыворотка",
      de: "Argan-Serum"
    },
    shortDesc: {
      tr: "Saf argan yağı bazlı besleyici serum. Saç ve cilt bakımında mükemmel sonuçlar sağlar.",
      en: "Pure argan oil based nourishing serum. Provides excellent results in hair and skin care.",
      ru: "Питательная сыворотка на основе арганового масла. Для волос и кожи.",
      de: "Nährendes Serum auf Arganölbasis. Hervorragende Ergebnisse für Haar und Haut."
    },
    longDesc: {
      tr: "Fas'tan özel olarak temin edilen saf argan yağından üretilen bu serum, cildi ve saçı derinlemesine besler. E vitamini açısından zengindir ve kuruluğu giderir.",
      en: "Made from pure argan oil specially sourced from Morocco, this serum deeply nourishes skin and hair. Rich in Vitamin E and eliminates dryness.",
      ru: "Сыворотка из чистого арганового масла из Марокко глубоко питает кожу и волосы.",
      de: "Aus reinem marokkanischem Arganöl hergestelltes Serum nährt Haut und Haare tiefenwirksam."
    },
    included: {
      tr: ["Saf Argan Yağı", "E Vitamini Zengin", "Saç ve Cilt İçin"],
      en: ["Pure Argan Oil", "Rich in Vitamin E", "For Hair and Skin"],
      ru: ["Чистое аргановое масло", "Богато витамином Е", "Для волос и кожи"],
      de: ["Reines Arganöl", "Reich an Vitamin E", "Für Haar und Haut"]
    }
  },
  {
    id: "prd-12",
    mainCategory: "spa_products",
    subCategory: "peeling",
    badge: "Peeling",
    priceTRY: 450,
    icon: "sparkles",
    image: "./src/images/vip_crystal_menthol.webp",
    title: {
      tr: "Aromatic Salt Peeling",
      en: "Aromatic Salt Peeling",
      ru: "Ароматический Солевой Пилинг",
      de: "Aromatisches Salzpeeling"
    },
    shortDesc: {
      tr: "Aromatik tuz peeling. Ölü deri hücrelerini arındırır ve cildi pürüzsüzleştirir.",
      en: "Aromatic salt peeling. Removes dead skin cells and smoothens the skin.",
      ru: "Ароматический солевой пилинг. Удаляет мертвые клетки кожи и разглаживает.",
      de: "Aromatisches Salzpeeling. Entfernt abgestorbene Hautzellen und glättet die Haut."
    },
    longDesc: {
      tr: "Doğal deniz tuzu ve aromatik yağların birleşiminden oluşan bu peeling, ciltteki ölü hücreleri nazikçe temizler. Kan dolaşımını hızlandırır ve cilde canlılık kazandırır.",
      en: "This peeling, made from a combination of natural sea salt and aromatic oils, gently cleanses dead cells from the skin. Boosts circulation and adds vitality to the skin.",
      ru: "Пилинг из натуральной морской соли и ароматических масел мягко очищает кожу от мертвых клеток.",
      de: "Dieses Peeling aus Meersalz und aromatischen Ölen reinigt sanft abgestorbene Hautzellen."
    },
    included: {
      tr: ["Doğal Deniz Tuzu", "Aromatik Yağlar", "Cilt Yenileyici"],
      en: ["Natural Sea Salt", "Aromatic Oils", "Skin Renewal"],
      ru: ["Натуральная морская соль", "Ароматические масла", "Обновление кожи"],
      de: ["Natürliches Meersalz", "Aromatische Öle", "Hauterneuerung"]
    }
  }
];

const SUB_CATEGORIES = {
  services: [
    { key: 'all', label: { tr: 'Tüm Paketler', en: 'All Packages', ru: 'Все пакеты', de: 'Alle Pakete' } },
    { key: 'silver_package', label: { tr: 'Silver Paket', en: 'Silver Package', ru: 'Серебряный Пакет', de: 'Silver Paket' } },
    { key: 'gold_package', label: { tr: 'Gold Paket', en: 'Gold Package', ru: 'Золотой Пакет', de: 'Gold Paket' } },
    { key: 'luxury_package', label: { tr: 'Luxury Paket (Diamond)', en: 'Luxury Package (Diamond)', ru: 'Люкс Пакет (Diamond)', de: 'Luxury Paket (Diamond)' } }
  ],
  products: [
    { key: 'all', label: { tr: 'Tüm Ürünler', en: 'All Products', ru: 'Все товары', de: 'Alle Produkte' } },
    { key: 'spa_products', label: { tr: 'Spa & Bakım Ürünleri', en: 'Spa & Body Products', ru: 'СПА Продукция', de: 'Spa & Pflege' } }
  ]
};
