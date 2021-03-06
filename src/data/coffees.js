const coffeeProducts = [
  {
    id: 1,
    title: 'اسپرسو',
    key: 'espresso',
    image: '/coffees/1.png',
    description: 'این تصور نادرست وجود دارد که اسپرسو یک دانه است. در واقع کلمه اسپرسو به روش خاصی از دم کردن قهوه گفته می شود. اسپرسو نوعی قهوه است که در دستگاه اسپرسو دم می شود. دانه ها قبلاً خوب آسیاب می شوند و سپس دوز سریعی از فشار زیاد و آب گرم دریافت می کنند. این ترکیب فشار و آب، مقدار کمی قهوه متراکم با طعم غنی استخراج می کند. یک جرعه اسپرسو حدود ۷ تا ۹ گرم قهوه آسیاب شده می برد که حدود ۲ اونس (۵۶ گرم) قهوه اسپرسو تولید می کند. دو جرعه دوبرابر قهوه آسیاب شده می برد و دو برابر قهوه اسپرسو تولید می کند.',
  },
  {
    id: 2,
    title: 'موکا',
    key: 'mocha',
    image: '/coffees/2.png',
    description: 'موکا یک قهوه محبوب و دسری با شکلات است. عموماً آن را با ترکیب یک جرعه اسپرسو و پودر کاکائوی مخلوط با شیر درست می کنند. شیر را می جوشانند و نوشیدنی را با هنر لاته تزئین می کنند. یکی از انواع آن بیچرین است که نوشیدنی مخصوص شهر تورین در ایتالیا است و ترکیبی از قهوه، خامه شکلاتی با طعم فندق و خامه غلیظ است.',
  },
  {
    id: 3,
    title: 'لاته',
    key: 'latte',
    image: '/coffees/3.png',
    description: 'لاته محبوب و مشهور یک نوشیدنی اسپرسوی ایتالیایی است که دو بخش شیر جوشیده و یک بخش قهوه دارد. معمولاً از کاپوچینو بزرگتر است و شیر بیشتری دارد و در فنجان ۷ اونسی (۱۹۸ گرمی) سرو می شود. از آنجائیکه شیر فقط جوشانده می شود و کف زیادی ندارد، سطح مناسبی برای ایجاد طرح های هنری فراهم می کند. شیر بیشتر به معنای طعم رقیق تر است و برای افرادی که تازه با طعم قهوه آشنا شده اند مناسب تر است.',
  },
  {
    id: 4,
    title: 'آمریکانو',
    key: 'americano',
    image: '/coffees/4.png',
    description: 'آمریکانو یک جرعه اسپرسو و آب اضافی برای بیشتر کردن آن است. این طعم رقیقی ایجاد می کند که بیشتر شبیه قهوه صاف شده آمریکایی است تا یک جرعه اسپرسو. می توان ۶ تا ۸ اونس آب (۱۷۰ تا ۲۲۰ گرم آب) اضافه کرد و البته مقدار آن به دلخواه متغیر است. این قهوه بدون شیر و به صورت قهوه سیاه سرو می شود.',
  },
  {
    id: 5,
    title: 'کاپوچینو',
    key: 'cappoccino',
    image: '/coffees/5.png',
    description: 'این نوشیدنی مرسوم در ایتالیا یک بخش اسپرسو، یک بخش شیر جوشیده و یک بخش کف شیر دارد. اگر به درستی دم شود، هر جرعه ای که می نوشید باید به مقدار مساوی قهوه، شیر و کف داشته باشد. ولی در بیشتر کافی شاپ های آمریکا، آن را در فنجان های ۸ اونسی (۲۲۶ گرمی) سرو می کنند. در حالیکه کاپوچینوی اصلی در فنجان ۵ اونسی (۱۴۰ گرمی) سرو می شود. کاپوچینو به معنای "کلاه کوچک" است و به لایه باریک کف در بالای قهوه اطلاق می شود. در ایتالیا هرگز پس از وعده غذایی یا بعد از ۱۱ صبح، کاپوچینو نوشیده نمی شود.',
  },
  {
    id: 6,
    title: 'آفوگاتو',
    key: 'affogato',
    image: '/coffees/6.png',
    description: 'آفوگاتو یک نوشیدنی ایتالیایی برپایه قهوه است. آفوگاتو معمولاً از مخلوط کردن یک شات اسپرسو داغ با بستنی یا ژلاتوی وانیلی حاصل می‌شود.آفوگاتو در زبان ایتالیایی غرق شده معنی می شود آفوگاتو یا اصطلاحا قهوه بستنی، دسری است که از یک یا دو شات اسپرسو داغ با بستنی ترجیحا وانیلی تهیه می شود.',
  },
  {
    id: 7,
    title: 'ترک',
    key: 'turk',
    image: '/coffees/6.png',
    description: 'قهوهٔ ترک (به ترکی استانبولی: Türk kahvesi) شیوه‌ای برای سرو قهوه است. دانه‌های برشته‌شده و سپس کاملاً پودر شدهٔ قهوه در قهوه‌جوشی به نام جذوه جوشانده و در فنجان سرو می‌شوند. دانه‌های پودر شدهٔ قهوه در فنجان می‌توانند ته‌نشین شوند میتوان برای طعم دادن به قهوه از شکر استفاده می‌شود. این شیوهٔ سرو قهوه در خاورمیانه، شمال آفریقا، قفقاز و بالکان دیده می‌شود.',
  },
  {
    id: 8,
    title: 'کارامل ماکیاتو',
    key: 'caramelmachiato',
    image: '/coffees/6.png',
    description: 'در حالیکه این استارباکس بود که ماکیاتو را مشهور کرد، ولی ماکیاتوی استارباکس شباهت کمی به ماکیاتوی واقعی دارد. ماکیاتوی سنتی یک جرعه اسپرسو و بخش کوچکی از شیر کف دار در بالای آن است. این نوشیدنی کوچک خیلی قوی است زیرا غلیظ ترین طعم اسپرسو را دارد و شیر اضافه شده به آن، از شدت این طعم می کاهد. ماکیاتو به معنای "طرحدار" است و به طرح هایی که روی کف شیر داده می شود اطلاق می گردد.',
  },
];
export default coffeeProducts;
