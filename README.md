# Trani

Trani için tasarlanmış web sitesi tasarımının HTML dönüşümü projesidir.

## Kurulum Talimatları

Proje, **[Node.js](https://nodejs.org/)** üzerinde **[Gulp.js](https://gulpjs.com/)** ile geliştirilmiştir.

Geliştirme yapmak için, bilgisayarınızda Node.js kurulu olmalıdır. Eğer kurulu değilse, [Node.js](https://nodejs.org/) web sitesi üzerinden işletim sisteminize uygun sürümü kurunuz.

Proje bağımlılıkları için, **[Yarn](https://yarnpkg.com/)** paket yöneticisi tercih edilmiştir. İsterseniz **[npm](https://nodejs.org/)** paket yönetisini de kullanabilirsiniz. Eğer npm kullanacaksanız; `package-lock.json` dosyasını repoya **eklemeyiniz**.

Geliştirme ortamını kurmak için; aşağıdaki yönergeleri takip ediniz.

#### Bağımlılıkları Yükleyin

```bash
yarn install
```

#### Geliştirmeye Başlayın

```bash
yarn dev
```

Bu komut çalıştırıldıktan sonra, otomatik olarak web tarayıcınız <http://localhost:3000> adresi açılacak ve projenin mevcut halini canlı olarak görüntüleyebileceksiniz. Dosyalar üzerinde yaptığınız tüm değişiklikleri bu sayfa üzerinden sayfanızı yenilemeye gerek duymadan görebileceksiniz.

#### Çıktı Oluşturma

```bash
yarn build
```

#### Oluşturduğunuz Çıktıyı Arşiv Dosyası Haline Getirme olarak

```bash
yarn archive
```

Bu komut çalıştırıldıktan sonra, _Gulp.js_ otomatik tüm çıktıyı oluşturacak ve proje dizininde yer alan `build` klasörüne `Tanju yildiz_build_[tarih]_[saat].zip` dosyası olarak kaydedecektir.

## Demo

Projenin demo halini [trani.vercel.app](https://trani.vercel.app) adresinden görüntüleyebilirsiniz.

## Hata ve Yeni Özellik İstekleri

Geliştirme aşamasında herhangi bir hata mı aldınız? Yeni bir özellik eklemenmesini mi istiyorsunuz? O halde Github üzerinde [yeni bir istek başlığı](https://github.com/grafixcw/masirdoor/issues/new) oluşturunuz.

## Telif Hakkı & Lisans

Telif hakları [Grafix Kreatif Yazılım Atölyesi](http://grafix.com.tr) ve [Hasan Korkmaz](https://github.com/Korkihasan)'e aittir. Proje kodları [MIT lisansı](https://github.com/grafixcw/trani/blob/master/LICENSE) altında sunulmuştur.
