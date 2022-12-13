<template>
  <footer>
    <div
      class="footer flex flex-col w-full px-[10px] bg-secondary text-white md:px-[100px] lg:px-[165px]"
    >
      <div class="footer__desktop flex rounded-[25px]">
        <div
          class="footer__desktop__wrapper flex flex-col p-[10px] gap-[20px] w-full"
        >
          <div
            class="footer__desktop__map mt-[-75px] w-full rounded-lg overflow-hidden border-primary border-2"
          >
            <iframe
              class="w-full"
              title="footer"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.304754248145!2d106.8327312!3d-6.1874272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7250225273d7d32b!2sSAMASTA%20INTEGRATED%20MEDICAL%20CENTER!5e0!3m2!1sid!2sid!4v1651912425781!5m2!1sid!2sid"
              loading="lazy"
            ></iframe>
          </div>
          <div
            class="footer__desktop__content w-full flex gap-[20px] flex-col md:flex-row lg:flex-row"
          >
            <div
              class="footer__desktop__content__contact flex-col gap-[40px] w-full md:w-1/3 text-center border-b-2 md:border-b-0 md:border-r-2 border-primary"
            >
              <div class="footer__desktop__content__contact__title text-[20px]">
                <h2>Kontak Kami</h2>
              </div>
              <div class="footer__desktop__content__contact__desc text-[14px]">
                <p>0895619258715</p>
              </div>
            </div>
            <div
              class="footer__desktop__content__address flex-col gap-[20px] w-full md:w-1/3 text-center"
            >
              <div class="footer__desktop__content__address__title text-[20px]">
                <h2>Alamat</h2>
              </div>
              <div class="footer__desktop__content__address__desc text-[14px]">
                <p>
                  Jl. Johar No.1A, RT.5/RW.3, Gondangdia, Kec. Menteng, Kota
                  Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350
                </p>
              </div>
            </div>
            <div
              class="footer__desktop__content__social flex-col gap-[20px] w-full md:w-1/3 text-center border-t-2 md:border-t-0 md:border-l-2 border-primary"
            >
              <div class="footer__desktop__content__social__title text-[20px]">
                <h2>social</h2>
              </div>
              <div
                class="footer__desktop__content__social__wrapper flex gap-[20px] px-[20px]"
              >
                <div class="footer__desktop__content__social__item w-1/3">
                  <a href="https://youtube.com" target="_blank">
                    <picture>
                      <img src="/images/youtube 1.png" alt="youtube" />
                    </picture>
                  </a>
                </div>
                <div class="footer__desktop__content__social__item w-1/3">
                  <a href="https://youtube.com" target="_blank">
                    <picture>
                      <img src="/images/linkedin 1.png" alt="youtube" />
                    </picture>
                  </a>
                </div>
                <div class="footer__desktop__content__social__item w-1/3">
                  <a href="https://youtube.com" target="_blank">
                    <picture>
                      <img src="/images/telegram 1.png" alt="youtube" />
                    </picture>
                  </a>
                </div>
                <div class="footer__desktop__content__social__item w-1/3">
                  <a href="https://youtube.com" target="_blank">
                    <picture>
                      <img src="/images/twitter 1.png" alt="youtube" />
                    </picture>
                  </a>
                </div>
                <div class="footer__desktop__content__social__item w-1/3">
                  <a href="https://youtube.com" target="_blank">
                    <picture>
                      <img src="/images/instagram 1.png" alt="youtube" />
                    </picture>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="footer__desktop__copyright">
            <div
              class="footer__desktop__copyright__wrapper text-center flex justify-center rounded-lg bg-primary text-secondary font-bold"
            >
              <div class="footer__desktop__copyright__text">
                <h2>Copyright @ Group 2 2022</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>
