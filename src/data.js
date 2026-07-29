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
    priceTRY: 1500,
    duration: 60,
    icon: "sparkles",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
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
    priceTRY: 2800,
    duration: 90,
    icon: "crown",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
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

  // --- SPA & BATH PRODUCTS ---
  {
    id: "prd-1",
    mainCategory: "spa_products",
    subCategory: "soaps",
    badge: "El Yapımı",
    priceTRY: 220,
    icon: "package",
    image: "https://images.unsplash.com/photo-1607006482140-410d5402436f?auto=format&fit=crop&w=800&q=80",
    title: {
      tr: "Geleneksel Saf Zeytinyağlı Defne Sabunu (300g)",
      en: "Traditional Pure Olive Oil & Laurel Soap (300g)",
      ru: "Натуральное Оливково-Лавровое Мыло (300г)",
      de: "Traditionelle Olivenöl- & Lorbeerseife (300g)"
    },
    shortDesc: {
      tr: "Kazanlarda kaynatılarak üretilmiş %100 doğal Antakya zeytinyağlı ve defneli banyo sabunu.",
      en: "100% handmade natural olive oil & laurel bay soap brewed in traditional cauldrons.",
      ru: "100% натуральное оливковое мыло с добавлением лаврового масла по старинному рецепту.",
      de: "Handgesiedete reine Olivenölseife mit natürlichem Lorbeeröl."
    },
    longDesc: {
      tr: "Kimyasal katkı maddesi, paraben ve SLS içermez. Cildi kurutmadan derinlemesine temizler, saç ve vücut kullanımına uygundur.",
      en: "Free of chemicals, parabens, and synthetic additives. Cleanses deeply while preserving skin moisture balance.",
      ru: "Без химических добавок и парабенов. Бережно очищает кожу и волосы, не сушит.",
      de: "Frei von Parabenen und Zusatzstoffen. Reinigt sanft und spendet natürliche Feuchtigkeit."
    },
    included: {
      tr: ["%100 Doğal Soğuk Sıkım Zeytinyağı", "Özel Keten Kesesinde Ambalaj", "300g Çift Kalıp"],
      en: ["100% Organic Cold-pressed Olive Oil", "Packed in Linen Pouch", "300g Double Bar"],
      ru: ["100% органическое оливковое масло", "В льняном мешочке", "300г"],
      de: ["100% biologisches Olivenöl", "In Leinenbeutel verpackt", "300g Doppelstück"]
    }
  },
  {
    id: "prd-2",
    mainCategory: "spa_products",
    subCategory: "textile",
    badge: "Orijinal İpek",
    priceTRY: 350,
    icon: "shirt",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    title: {
      tr: "Hakiki %100 Saf İpek Hamam Kesesi",
      en: "Authentic 100% Pure Silk Kese Glove",
      ru: "Шелковая Рукавица Кесе 100%",
      de: "Authentischer 100% Seiden-Kese Handschuh"
    },
    shortDesc: {
      tr: "Dokuma tekniğiyle hazırlanmış, hassas ve etkili ölü deri arındırıcı hamam kesesi.",
      en: "Woven pure silk glove for gentle yet superior exfoliation of dead skin cells.",
      ru: "Шелковая варежка для идеального очищения кожи без раздражения.",
      de: "Gewebter Seidenhandschuh für sanftes und effektives Peeling."
    },
    longDesc: {
      tr: "Hamam tellaklarının tercih ettiği orijinal Bursa dokuması saf ipek kese. Selülit oluşumunu engellemeye yardımcı olur ve batık sorunlarını giderir.",
      en: "Authentic Bursa silk weave glove used by professional hamam tellaks. Helps reduce ingrown hairs and improves microcirculation.",
      ru: "Настоящая шелковая рукавица из Бурсы. Улучшает кровообращение и делает кожу невероятно гладкой.",
      de: "Original Seidenhandschuh aus Bursa. Hilft gegen Eingewachsenes Haar und stimuliert die Haut."
    },
    included: {
      tr: ["%100 Ham İpek İplik", "Hassas ve Normal Ciltler İçin Uygun", "Bilek Büzgülü Ergonomik Yapı"],
      en: ["100% Raw Silk Yarn", "Suitable for Sensitive & Normal Skin", "Elastic Wrist Band"],
      ru: ["100% натуральный шелк", "Подходит для чувствительной кожи", "Удобная резинка на запястье"],
      de: ["100% Rohseide", "Für empfindliche Haut geeignet", "Elastischer Bund"]
    }
  },
  {
    id: "prd-3",
    mainCategory: "spa_products",
    subCategory: "textile",
    badge: "Pamuk Dokuma",
    priceTRY: 450,
    icon: "towel",
    image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=800&q=80",
    title: {
      tr: "Geleneksel Denizli Pamuk Peştemal",
      en: "Traditional Denizli Cotton Pestemal Towel",
      ru: "Традиционный Хлопковый Пештемаль",
      de: "Traditionelles Denizli Baumwoll-Pestemal"
    },
    shortDesc: {
      tr: "Hızlı kuruyan, yüksek su emiciliğine sahip, saçaklı lüks hamam peştemali.",
      en: "Ultra-absorbent, fast-drying luxury cotton Turkish bath towel with handmade tassels.",
      ru: "Легкое хлопковое полотенце-пештемаль с высокой впитываемостью.",
      de: "Saugfähiges, schnell trocknendes türkisches Hamamtuch aus reiner Baumwolle."
    },
    longDesc: {
      tr: "%100 Denizli pamuğundan elde dokuma tezgahlarında üretilmiştir. Plajda, hamamda ve günlük banyoda rahatlıkla kullanılabilir.",
      en: "Hand-woven from 100% premium Aegean cotton. Perfect for hamams, beaches, saunas, or home spas.",
      ru: "Соткан из 100% эгейского хлопка. Идеально для хамама, пляжа и сауны.",
      de: "Handgewebt aus 100% Ägäis-Baumwolle. Ideal für Hamam, Strand und Sauna."
    },
    included: {
      tr: ["100x180 cm Standart Boyut", "%100 Pamuklu İplik", "Yıkandıkça Yumuşayan Dokularda"],
      en: ["100x180 cm Standard Size", "100% Aegean Cotton", "Gets Softer With Every Wash"],
      ru: ["100х180 см", "100% хлопок", "Становится мягче с каждой стиркой"],
      de: ["100x180 cm", "100% Baumwolle", "Wird mit jeder Wäsche weicher"]
    }
  },
  {
    id: "prd-4",
    mainCategory: "spa_products",
    subCategory: "oils",
    badge: "Organik",
    priceTRY: 650,
    icon: "droplet",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    title: {
      tr: "Argan & Yasemin Masaj & Bakım Yağı (250ml)",
      en: "Argan & Jasmine Body & Massage Oil (250ml)",
      ru: "Масло для тела Арган и Жасмин (250мл)",
      de: "Argan- & Jasmin-Körperöl (250ml)"
    },
    shortDesc: {
      tr: "Fas argan yağı, tatlı badem ve büyüleyici yasemin aromalı lüks vücut yağı.",
      en: "Moroccan argan oil blended with sweet almond and intoxicating jasmine aroma.",
      ru: "Марокканское аргановое масло с ароматом жасмина и миндаля.",
      de: "Marokkanisches Arganöl mit süßem Mandel- und Jasminduft."
    },
    longDesc: {
      tr: "Banyo ve hamam sonrası nemini kaybetmiş cildi besler. Yağlı his bırakmadan hızla emilir ve vücudunuzda hoş bir koku bırakır.",
      en: "Restores moisture after baths. Absorbs quickly without greasy residue, leaving a delicate scent.",
      ru: "Питает сухую кожу после банных процедур. Быстро впитывается без липкости.",
      de: "Spendet der Haut nach dem Bad intensive Feuchtigkeit ohne zu fetten."
    },
    included: {
      tr: ["Soğuk Sıkım Argan Yağı", "Doğal Yasemin Özleri", "250ml Cam Şişe"],
      en: ["Cold-pressed Argan Oil", "Natural Jasmine Extract", "250ml Glass Bottle"],
      ru: ["Аргановое масло", "Экстракт жасмина", "250мл"],
      de: ["Kaltgepresstes Arganöl", "Jasmin-Extrakt", "250ml Glasflasche"]
    }
  },
  {
    id: "prd-5",
    mainCategory: "spa_products",
    subCategory: "sets",
    badge: "Hediyelik",
    priceTRY: 1100,
    icon: "gift",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    title: {
      tr: "History Hamam Ahşap Hediyelik Banyo Seti",
      en: "History Hamam Luxury Wooden Bath Gift Set",
      ru: "Подарочный Банный Набор в Деревянной Шкатулке",
      de: "History Hamam Luxus-Badeset in Holzkiste"
    },
    shortDesc: {
      tr: "Özel ahşap kutuda: Peştemal, İpek Kese, Zeytinyağlı Sabun, Masaj Yağı ve Ponza Taşı.",
      en: "Luxury wooden crate containing: Pestemal, Silk Kese, Olive Soap, Oil & Pumice Stone.",
      ru: "Подарочный набор: пештемаль, шелковая кесе, оливковое мыло, масло и пемза.",
      de: "Geschenkbox mit: Pestemal, Seidenkese, Olivenseife, Körperöl und Bimsstein."
    },
    longDesc: {
      tr: "Sevdiklerinize unutulmaz bir Osmanlı banyo hediyesi verin. Tamamen doğal el yapımı ürünlerden oluşan lüks koleksiyon.",
      en: "The ultimate authentic souvenir gift. Packed with premium handcrafted bath products.",
      ru: "Идеальный памятный подарок из Турции с натуральной банной косметикой.",
      de: "Das perfekte Geschenk-Souvenir mit hochwertigen handgefertigten Badeprodukten."
    },
    included: {
      tr: ["Ahşap Oyma Kutu", "%100 Pamuk Peştemal", "İpek Kese", "Zeytinyağlı Sabun", "50ml Masaj Yağı", "Doğal Volkanik Ponza Taşı"],
      en: ["Crafted Wooden Box", "100% Cotton Pestemal", "Pure Silk Kese", "Olive Soap Bar", "50ml Massage Oil", "Volcanic Pumice Stone"],
      ru: ["Деревянная коробка", "Пештемаль", "Шелковая кесе", "Оливковое мыло", "Масло 50мл", "Пемза"],
      de: ["Holzbox", "Baumwoll-Pestemal", "Seidenkese", "Olivenseife", "50ml Öllotion", "Bimsstein"]
    }
  },

  // --- BEVERAGES & DRINKS ---
  {
    id: "bev-1",
    mainCategory: "beverages",
    subCategory: "fresh_juices",
    badge: "Taze Sıkma",
    priceTRY: 180,
    icon: "citrus",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80",
    title: {
      tr: "Taze Sıkılmış Portakal & Nar Suyu Mix (350ml)",
      en: "Freshly Squeezed Orange & Pomegranate Juice",
      ru: "Свежевыжатый Сок Апельсин и Гранат",
      de: "Frisch gepresster Orangensaft & Granatapfelsaft"
    },
    shortDesc: {
      tr: "Alanya narlarından ve Akdeniz portakallarından anında taze sıkılmış C vitamini deposu.",
      en: "Pure Mediterranean oranges and local Alanya pomegranates freshly squeezed upon order.",
      ru: "Свежевыжатый сок из средиземноморских апельсинов и аланийских гранатов.",
      de: "Frisch gepresster Saft aus mediterranen Orangen und Alanya-Granatäpfeln."
    },
    longDesc: {
      tr: "Hamamda terledikten sonra vücudun elektrolit ve vitamin dengesini tazelemek için en mükemmel içecek.",
      en: "The best vitamin C boost after detoxing in the hamam sauna.",
      ru: "Идеальный витаминный напиток после посещения сауны и хамама.",
      de: "Die perfekte Erfrischung nach dem Saunagang."
    },
    included: {
      tr: ["%100 Katkısız Taze Meyve", "Buzlu veya Oda Sıcaklığında Servis"],
      en: ["100% Natural Fresh Fruit", "Served Chilled or Room Temp"],
      ru: ["100% свежие фрукты", "Подается со льдом"],
      de: ["100% frische Früchte", "Gekühlt serviert"]
    }
  },
  {
    id: "bev-2",
    mainCategory: "beverages",
    subCategory: "hot_drinks",
    badge: "Geleneksel",
    priceTRY: 120,
    icon: "coffee",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    title: {
      tr: "Köpüklü Geleneksel Türk Kahvesi & Lokum",
      en: "Traditional Turkish Coffee with Turkish Delight",
      ru: "Турецкий Кофе с Рахат-Лукумом",
      de: "Türkischer Kaffee mit Lokum"
    },
    shortDesc: {
      tr: "Közde pişirilmiş bol köpüklü Kurukahveci Mehmet Efendi kahvesi ve çifte kavrulmuş fıstıklı lokum.",
      en: "Authentic slow-cooked Turkish coffee served with premium pistachio Turkish delight.",
      ru: "Ароматный турецкий кофе с густой пеной и фисташковым лукумом.",
      de: "Traditioneller türkischer Kaffee mit feinem Schaum und Pistazien-Lokum."
    },
    longDesc: {
      tr: "Özel bakır cezvede pişirilen, yanında soğuk su ve fıstıklı lokum ikramıyla sunulan klasiklerimizden.",
      en: "Brewed in traditional copper pot, accompanied by cold spring water and double-roasted delight.",
      ru: "Варится в медной турке, подается с холодной водой и лукумом.",
      de: "In der Kupferkanne zubereitet, serviert mit frischem Wasser und Lokum."
    },
    included: {
      tr: ["Bakır Fincanda Özel Sunum", "Antep Fıstıklı Çifte Kavrulmuş Lokum", "Soğuk Cam Şişe Su"],
      en: ["Served in Copper Cup", "Pistachio Turkish Delight", "Cold Spring Water"],
      ru: ["Подача в медной чашке", "Фисташковый рахат-лукум", "Прохладная вода"],
      de: ["Serviert in Kupfertasse", "Pistazien-Lokum", "Kaltes Wasser"]
    }
  },
  {
    id: "bev-3",
    mainCategory: "beverages",
    subCategory: "cold_drinks",
    badge: "Osmanlı Saray",
    priceTRY: 140,
    icon: "wine",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    title: {
      tr: "Buzlu Osmanlı Şerbeti (Gül & Demirhindi)",
      en: "Iced Ottoman Sherbet (Rose & Tamarind)",
      ru: "Османский Шербет со Льдом (Роза и Тамаринд)",
      de: "Eiskalter Osmanischer Scherbet (Rose & Tamarinde)"
    },
    shortDesc: {
      tr: "40 çeşit baharat, gül yaprakları, karanfil ve demirhindi ile hazırlanan tarihi serinletici şerbet.",
      en: "Refreshing traditional herbal sherbet infused with rose petals, tamarind, cinnamon, and cloves.",
      ru: "Традиционный освежающий напиток из лепестков роз, тамаринда, гвоздики и корицы.",
      de: "Erfrischender traditioneller Scherbet aus Rosenblüten, Tamarinde und Gewürzen."
    },
    longDesc: {
      tr: "Saray hekimlerinin serinletici ve hazmı kolaylaştırıcı tarifi. Hamam sonrasında ferahlığın simgesidir.",
      en: "Authentic Ottoman palace recipe crafted to quench thirst and refresh after steam baths.",
      ru: "Старинный рецепт султанского двора для утоления жажды в хамаме.",
      de: "Königliches Rezept zur Erfrischung nach dem Dampfbad."
    },
    included: {
      tr: ["Doğal Baharat & Gül Özü", "Buzlu Sürahi Sunumu"],
      en: ["Natural Spices & Rose Essence", "Served Chilled"],
      ru: ["Натуральные специи и роза", "Со льдом"],
      de: ["Natürliche Gewürze & Rose", "Eiskalt serviert"]
    }
  },
  {
    id: "bev-4",
    mainCategory: "beverages",
    subCategory: "cold_drinks",
    badge: "Ferahlatıcı",
    priceTRY: 80,
    icon: "glass-water",
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80",
    title: {
      tr: "Kızılay Limonlu & Sade Doğal Maden Suyu",
      en: "Sparkling Mineral Water (Natural / Lemon)",
      ru: "Минеральная Газированная Вода (Лимон / Классика)",
      de: "Natürliches Mineralwasser (Natur / Zitrone)"
    },
    shortDesc: {
      tr: "Doğal zengin mineralli soda, buz ve taze limon dilimi ile.",
      en: "Rich natural sparkling mineral water served with ice and fresh lemon slice.",
      ru: "Газированная минеральная вода со льдом и долькой лимона.",
      de: "Mineralstoffreiches Sprudelwasser mit Eis und Zitrone."
    },
    longDesc: {
      tr: "Vücuttan atılan mineralleri geri kazandıran serinletici sodalarımız.",
      en: "Replenishes minerals lost during sweating in the hamam.",
      ru: "Восполняет минералы после сауны.",
      de: "Füllt den Mineralstoffgehalt nach dem Saunagang auf."
    },
    included: {
      tr: ["Buzlu Cam Bardak", "Taze Limon Dilimleri"],
      en: ["Iced Glass", "Fresh Lemon Slices"],
      ru: ["Стакан со льдом", "Свежий лимон"],
      de: ["Eisglas", "Frische Zitronenscheiben"]
    }
  },
  {
    id: "bev-5",
    mainCategory: "beverages",
    subCategory: "cold_drinks",
    badge: "Kutu Meşrubat",
    priceTRY: 100,
    icon: "cup-soda",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
    title: {
      tr: "Soğuk Meşrubat Çeşitleri (Cola, Fanta, Sprite, Fuse Tea)",
      en: "Assorted Cold Soft Drinks (Coca-Cola, Fanta, Sprite, Ice Tea)",
      ru: "Холодные Газированные Напитки (Кола, Фанта, Спрайт, Чай)",
      de: "Kühle Erfrischungsgetränke (Cola, Fanta, Sprite, Eistee)"
    },
    shortDesc: {
      tr: "Buz gibi 330ml kutu Coca-Cola Zero, Fanta, Sprite, Lipton Şeftali/Limon Buzlu Çay.",
      en: "Ice-cold 330ml canned sodas and iced teas.",
      ru: "Освежающие напитки в банках 330мл.",
      de: "Eiskalte 330ml Dosengetränke."
    },
    longDesc: {
      tr: "İstediğiniz markada soğuk içecek tercihinizi garsonlarımıza bildirebilirsiniz.",
      en: "Choose your favorite chilled soft drink.",
      ru: "Выберите ваш любимый напиток.",
      de: "Wählen Sie Ihr Lieblingsgetränk."
    },
    included: {
      tr: ["330ml Soğuk Kutu", "Buzlu Bardak Sunumu"],
      en: ["330ml Chilled Can", "Served with Ice Glass"],
      ru: ["Банка 330мл", "Со льдом"],
      de: ["330ml Dose", "Mit Eisglas"]
    }
  },
  {
    id: "bev-6",
    mainCategory: "beverages",
    subCategory: "cold_drinks",
    badge: "Enerji",
    priceTRY: 150,
    icon: "zap",
    image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=800&q=80",
    title: {
      tr: "Red Bull Enerji İçeceği (250ml)",
      en: "Red Bull Energy Drink (250ml)",
      ru: "Энергетический Напиток Red Bull (250мл)",
      de: "Red Bull Energy Drink (250ml)"
    },
    shortDesc: {
      tr: "Canlandırıcı buz gibi Red Bull Energy Drink.",
      en: "Ice-cold revitalizing Red Bull Energy Drink.",
      ru: "Освежающий энергией Red Bull.",
      de: "Eiskalter Red Bull Energy Drink."
    },
    longDesc: {
      tr: "Güne enerji katmak ve zindelik kazanmak için harika seçim.",
      en: "Boost your vitality after spa relaxation.",
      ru: "Заряд энергии и бодрости.",
      de: "Vitalitäts-Kick nach der Entspannung."
    },
    included: {
      tr: ["250ml Kutu", "Limon Dilimli Buzlu Bardak"],
      en: ["250ml Can", "Ice & Lemon Glass"],
      ru: ["Банка 250мл", "Со льдом"],
      de: ["250ml Dose", "Eisglas mit Zitrone"]
    }
  },
  {
    id: "bev-7",
    mainCategory: "beverages",
    subCategory: "hot_drinks",
    badge: "Bitki Çayı",
    priceTRY: 90,
    icon: "leaf",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    title: {
      tr: "Bitki & Meyve Çayları (Adaçayı, Ihlamur, Yeşil Çay, Papatya)",
      en: "Herbal & Fruit Teas (Sage, Linden, Green Tea, Chamomile)",
      ru: "Травяные Чаи (Шалфей, Липа, Зеленый, Ромашка)",
      de: "Kräuter- & Früchtetees (Salbei, Lindenblüte, Grüntee, Kamille)"
    },
    shortDesc: {
      tr: "Doğal süzme bal ve limon dilimi eşliğinde porselen demlikte bitki çayları.",
      en: "Brewed loose-leaf herbal teas served with organic honey and lemon.",
      ru: "Натуральный травяной чай с медом и лимоном.",
      de: "Frisch aufgebrühter Kräutertee mit Honig und Zitrone."
    },
    longDesc: {
      tr: "Hamam sonrası toksin atmaya yardımcı organik bitki çaylarımız.",
      en: "Helps detoxify the body following hamam steam sessions.",
      ru: "Помогает выводить токсины после хамама.",
      de: "Unterstützt die Entgiftung nach dem Dampfbad."
    },
    included: {
      tr: ["Porselen Demlik Sunumu", "Süzme Doğal Bal", "Taze Limon"],
      en: ["Porcelain Teapot", "Organic Honey", "Fresh Lemon"],
      ru: ["Фарфоровый чайник", "Натуральный мед", "Лимон"],
      de: ["Porzellankanne", "Echter Honig", "Frische Zitrone"]
    }
  },

  // --- FOOD & SNACKS ---
  {
    id: "fd-1",
    mainCategory: "food",
    subCategory: "desserts",
    badge: "Geleneksel Tatlı",
    priceTRY: 280,
    icon: "utensils",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80",
    title: {
      tr: "Geleneksel Antep Fıstıklı Baklava (4 Adet)",
      en: "Authentic Antep Pistachio Baklava (4 Pcs)",
      ru: "Фисташковая Бактрава из Антепа (4 шт)",
      de: "Echte Antep Pistazien-Baklava (4 Stk)"
    },
    shortDesc: {
      tr: "Taze terayağlı, bol Antep fıstıklı çıtır çıtır saray baklavası.",
      en: "Crispy layers of buttered filo pastry stuffed with premium Gaziantep pistachios.",
      ru: "Хрустящая баклава с обильной фисташковой начинкой и сливочным маслом.",
      de: "Knuspriges Blätterteiggebäck reichlich mit Antep-Pistazien gefüllt."
    },
    longDesc: {
      tr: "Gaziantep'ten günlük getirilen, saf sade yağ ile hazırlanmış hakiki fıstıklı baklava.",
      en: "Delivered fresh from Gaziantep master bakers daily.",
      ru: "Свежая баклава прямо от гастрономических мастеров.",
      de: "Täglich frisch gelieferte meisterhafte Baklava."
    },
    included: {
      tr: ["4 Adet Fıstıklı Baklava", "Pudra Şekeri & Antep Fıstığı Süslemesi"],
      en: ["4 Pieces Pistachio Baklava", "Pistachio Powder Dusting"],
      ru: ["4 штуки фисташковой баклавы", "Украшение фисташковой крошкой"],
      de: ["4 Stück Pistazien-Baklava", "Garniert mit Pistazienstaub"]
    }
  },
  {
    id: "fd-2",
    mainCategory: "food",
    subCategory: "snacks",
    badge: "Lüks Çerez",
    priceTRY: 240,
    icon: "cookie",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=800&q=80",
    title: {
      tr: "Lüks Karışık Kuruyemiş Tabağı (200g)",
      en: "Premium Mixed Roasted Nuts Plate (200g)",
      ru: "Премиум Ассорти Орехов (200г)",
      de: "Luxus Gemischte Nüsse Teller (200g)"
    },
    shortDesc: {
      tr: "Çifte kavrulmuş Antep fıstığı, kaju, fındık, badem ve soyulmuş kavrulmuş fıstık.",
      en: "Freshly double-roasted Gaziantep pistachios, cashews, hazelnuts, and almonds.",
      ru: "Свежеобжаренные фисташки, кешью, фундук и миндаль.",
      de: "Frisch geröstete Pistazien, Cashews, Haselnüsse und Mandeln."
    },
    longDesc: {
      tr: "İçeceklerinizin yanında mükemmel bir enerji kaynağı ve lezzetli bir atıştırmalık.",
      en: "A delicious nutrient-dense energy snack alongside cold or hot drinks.",
      ru: "Отличная питательная закуска к напиткам.",
      de: "Der perfekte Knabberspaß zu Ihren Getränken."
    },
    included: {
      tr: ["Antep Fıstığı", "Kaju", "Giresun Fındığı", "Badem"],
      en: ["Pistachios", "Cashews", "Hazelnuts", "Almonds"],
      ru: ["Фисташки", "Кешью", "Фундук", "Миндаль"],
      de: ["Pistazien", "Cashewnüsse", "Haselnüsse", "Mandeln"]
    }
  },
  {
    id: "fd-3",
    mainCategory: "food",
    subCategory: "fruits",
    badge: "Taze Meyve",
    priceTRY: 220,
    icon: "apple",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=800&q=80",
    title: {
      tr: "Mevsim Meyveleri Tabağı",
      en: "Seasonal Fresh Fruit Platter",
      ru: "Тарелка Свежих Сезонных Фруктов",
      de: "Frischer Saisonfrüchte-Teller"
    },
    shortDesc: {
      tr: "Buz üzerinde dilimlenmiş karpuz, kavun, çilek, muz, üzüm ve kivi ikramı.",
      en: "Artfully sliced fresh watermelon, melon, strawberries, bananas, and grapes on ice.",
      ru: "Нарезка арбуза, дыни, клубники, бананов и винограда на льду.",
      de: "Frisch auf Eis servierte Wassermelone, Honigmelone, Erdbeeren und Trauben."
    },
    longDesc: {
      tr: "Alanya'nın taze ve tatlı meyvelerinden hazırlanan serinletici şölen tabağı.",
      en: "Refreshing and hydrating fruit selection sourced daily from local orchards.",
      ru: "Свежайшие сочные фрукты от местных фермеров.",
      de: "Erfrischender Obstteller aus lokalen Früchten."
    },
    included: {
      tr: ["Buzlu Tepside Sunum", "Mevsim Meyveleri Karışımı"],
      en: ["Served on Ice Tray", "Mixed Seasonal Fruits"],
      ru: ["Подача на льду", "Микс фруктов"],
      de: ["Auf Eis serviert", "Gemischte Früchte"]
    }
  },
  {
    id: "fd-4",
    mainCategory: "food",
    subCategory: "hot_food",
    badge: "Sıcak Tost",
    priceTRY: 190,
    icon: "sandwich",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    title: {
      tr: "Gurme Kaşarlı Sucuklu Ayvalık Tostu",
      en: "Gourmet Cheese & Sausage Toast",
      ru: "Горячий Тост с Сыром и Колбасой",
      de: "Gourmet-Toast mit Käse & Türkischer Wurst"
    },
    shortDesc: {
      tr: "Özel Ayvalık ekmeğinde bol taze kaşar peyniri, dana sucuk, domates ve turşu.",
      en: "Crispy Ayvalik toast filled with melted kashar cheese, beef sausage, and pickles.",
      ru: "Хрустящий тост с расплавленным сыром, турецкой колбасой и огурчиками.",
      de: "Knuspriger Toast mit geschmolzenem Käse, Rinderwurst und Gurken."
    },
    longDesc: {
      tr: "Açlığınızı yatıştıracak sıcak, lezzetli ve doyurucu tostumuz patates cipsi ile servis edilir.",
      en: "Warm and satisfying crispy toast served with crispy potato chips.",
      ru: "Сытный горячий тост, подается с картофельными чипсами.",
      de: "Warmes, herzhaftes Sandwich serviert mit Kartoffelchips."
    },
    included: {
      tr: ["Ayvalık Tost Ekmeği", "Ermenek Dana Sucuk & Kaşar", "Patates Cipsi İkramı"],
      en: ["Ayvalik Toast Bread", "Beef Sausage & Kashar Cheese", "Side Potato Chips"],
      ru: ["Специальный хлеб", "Говяжья колбаса и сыр", "Чипсы"],
      de: ["Special Toastbrot", "Rinderwurst & Käse", "Beilagen-Chips"]
    }
  },
  {
    id: "fd-5",
    mainCategory: "food",
    subCategory: "snacks",
    badge: "Abur Cubur",
    priceTRY: 90,
    icon: "cookie",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80",
    title: {
      tr: "Çikolata & Cips Grubu (Snickers, Toblerone, Doritos, Lay's)",
      en: "Chocolates & Chips Selection (Toblerone, Snickers, Lays)",
      ru: "Шоколад и Чипсы (Toblerone, Snickers, Lay's)",
      de: "Schokolade & Chips Auswahl (Toblerone, Lays, Snickers)"
    },
    shortDesc: {
      tr: "Lüks ithal ve yerli çikolatalar, aromalı patates cipsleri.",
      en: "Assorted imported chocolates, candy bars, and savory potato crisps.",
      ru: "Шоколадные батончики и картофельные чипсы.",
      de: "Auswahl an Schokoladen und knusprigen Chips."
    },
    longDesc: {
      tr: "Hızlı atıştırmalık ihtiyacınız için ürün seçeneklerimizi garsonumuzdan talep edebilirsiniz.",
      en: "Quick sweet or savory snacks available upon request.",
      ru: "Быстрые сладкие и соленые перекусы.",
      de: "Schnelle süße oder herzhafte Snacks."
    },
    included: {
      tr: ["Kişisel Paket Ambalaj", "Servis Tabağı ile"],
      en: ["Individual Packaging", "Served on Plate"],
      ru: ["Индивидуальная упаковка", "Подача на тарелке"],
      de: ["Einzeln verpackt", "Serviert auf Teller"]
    }
  }
];

const SUB_CATEGORIES = {
  services: [
    { key: 'all', label: { tr: 'Tüm Paketler', en: 'All Packages', ru: 'Все пакеты', de: 'Alle Pakete' } },
    { key: 'silver_package', label: { tr: 'Gümüş Paket (Silver)', en: 'Silver Package', ru: 'Серебряный Пакет', de: 'Silver Paket' } },
    { key: 'gold_package', label: { tr: 'Gold Paket (Gold)', en: 'Gold Package', ru: 'Золотой Пакет', de: 'Gold Paket' } }
  ],
  products: [
    { key: 'all', label: { tr: 'Tüm Ürünler', en: 'All Products', ru: 'Все товары', de: 'Alle Produkte' } },
    { key: 'spa_products', label: { tr: 'Spa & Bakım Ürünleri', en: 'Spa & Body Products', ru: 'СПА Продукция', de: 'Spa & Pflege' } },
    { key: 'beverages', label: { tr: 'İçecekler & Meşrubatlar', en: 'Beverages & Drinks', ru: 'Напитки и Соки', de: 'Getränke' } },
    { key: 'food', label: { tr: 'Gıda & Atıştırmalıklar', en: 'Food & Snacks', ru: 'Закуски и Еда', de: 'Speisen & Snacks' } }
  ]
};
