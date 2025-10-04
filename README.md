# Portfolio Website - Oğuzcan Uzunöner

Modern ve responsive kişisel portfolio web sitesi. Yazılım geliştirici olarak deneyimlerim, projelerim ve yeteneklerimi sergileyen profesyonel bir platform.

## 🌟 Özellikler

- **Responsive Tasarım**: Mobil, tablet ve masaüstü cihazlarda mükemmel görünüm
- **Karanlık/Aydınlık Mod**: Kullanıcı tercihine göre tema değiştirme
- **Çoklu Dil Desteği**: Türkçe ve İngilizce içerik
- **Smooth Animasyonlar**: Kaydırma ile tetiklenen fade-in animasyonları
- **Scroll İndikatörü**: Sayfa ilerlemesini gösteren üst çubuk
- **Mobil Menü**: Yan taraftan açılan smooth menü animasyonu
- **İstatistikler**: Animasyonlu sayı sayaçları
- **İnteraktif Elemanlar**: Hover efektleri ve geçişler

## 📁 Dosya Yapısı

```
portfolio/
├── index.html          # Ana HTML dosyası
├── styles.css          # Tüm stiller
├── script.js           # JavaScript fonksiyonları
└── README.md           # Proje dokümantasyonu
```

## 🚀 Kurulum

1. Repository'yi klonlayın:

```bash
git clone https://github.com/oguzcanuzunoner/portfolio.git
```

2. Proje klasörüne gidin:

```bash
cd portfolio
```

3. `index.html` dosyasını tarayıcınızda açın veya bir local server kullanın:

```bash
# Python ile
python -m http.server 8000

# Node.js ile (http-server)
npx http-server
```

## 💻 Teknolojiler

- **HTML5**: Semantik ve erişilebilir yapı
- **CSS3**: Modern styling, flexbox, grid, transitions
- **Vanilla JavaScript**: Framework'siz, saf JS
- **LocalStorage**: Tema ve dil tercihlerini kaydetme

## 🎨 Özelleştirme

### Renkleri Değiştirme

`styles.css` dosyasında ana renk değişkenleri:

```css
/* Ana mavi renk */
#3498db

/* Karanlık mod arka plan */
#1a1a1a

/* Aydınlık mod arka plan */
#ffffff
```

### İçerik Güncelleme

`index.html` dosyasında:

- Kişisel bilgilerinizi güncelleyin
- İş deneyimlerinizi ekleyin/çıkarın
- Proje detaylarını özelleştirin
- İletişim bilgilerini değiştirin

### Dil Ekleme

Her HTML elemanına `data-en` ve `data-tr` attribute'ları eklenmiş. Yeni dil eklemek için:

1. HTML'de yeni attribute ekleyin: `data-de="German text"`
2. `script.js`'de dil değiştirme fonksiyonunu genişletin
3. Yeni dil butonu ekleyin

## 📱 Responsive Breakpoints

- **Desktop**: 1200px ve üzeri
- **Tablet**: 768px - 1199px
- **Mobile**: 767px ve altı

## 🎯 Özellikler Detayı

### Scroll Animasyonları

Sayfa kaydırıldığında elementler fade-in efekti ile görünür.

### Tema Değiştirme

Karanlık ve aydınlık mod arasında geçiş yapabilirsiniz. Tercih localStorage'da saklanır.

### Dil Değiştirme

TR/EN butonları ile anında içerik dili değiştirilir.

### Mobil Menü

Hamburger menüye tıklayarak soldan sağa açılan responsive menü.

### İstatistik Sayaçları

Sayfa görünüme geldiğinde sayılar animasyonlu şekilde artar.

## 🌐 Tarayıcı Desteği

- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)

## 📄 Lisans

Bu proje açık kaynaklıdır ve özgürce kullanılabilir.

## 📞 İletişim

- **Email**: uzunoneroguzcan@gmail.com
- **LinkedIn**: [linkedin.com/in/oguzcanuzunoner](https://linkedin.com/in/oguzcanuzunoner)
- **GitHub**: [github.com/oguzcanuzunoner](https://github.com/oguzcanuzunoner)

## 🙏 Teşekkürler

Bu portfolio'yu incelediğiniz için teşekkür ederim!

---

**Not**: Bu site sürekli güncellenmektedir. Yeni projeler ve özellikler eklenecektir.
