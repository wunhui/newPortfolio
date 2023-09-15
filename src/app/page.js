"use client";
import '@/app/page.scss'
import { useEffect, useState } from 'react';
import '@/app/locales/i18n';
import { useTranslation } from "react-i18next";

export default function Home() {
  const content = "I'm\nWeb Publisher";
  const [typingText, setTypingText] = useState('')
  const [count, setCount] = useState(0)
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypingText((prevTitleValue) => {
        let result = prevTitleValue ? prevTitleValue + content[count] : content[0];
          setCount(count + 1)
          if(count >= content.length) {
            setCount(0)
            setTypingText('')
          }
          return result

      });
    }, 500);
    return () => {
      clearInterval(typingInterval);
    };
  });
  const { t } = useTranslation();
  return (
    <div>
      <div className="fadein">
          <div className="load">
              <div className="circle"></div>
              <div className="circle"></div>
          </div>
      </div>
          <header className='header'>
            <div className='header-wrap'>
              <h1 className="logo">
                  <span>HWH</span>
              </h1>
              <div className="toggle">
                <input id="night_day" type="button" value="night" />
              </div>
            </div>
          </header>
          <section className="about">
              <h2 className="about_text sec_txt">About</h2>
              <div className="about_inner">
                  <div className="about_lf">
                      <div className="lf_img"></div>
                  </div>
                  <div className="about_rt">
                      <div className="typing_box">
                          <pre className="typing">{typingText}<span className="blink">|</span></pre>
                      </div>
                      <div className="about_rt_text_box">
                          <div className="rotate">
                              <h2>ABOUT</h2>
                          </div>
                          <div className="about_rt_text">
                             <p dangerouslySetInnerHTML={{__html: t('aboutText')}}/>
                            <div className="btn">
                              <a>Git site</a>
                          </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="skill">
              <h2 className="skill_text sec_txt">Skill</h2>
              <div className="skill_inner">
                  <div className="skill_lf">
                      <div className="skill_title">
                          <div className="sm">
                              <p>MY SKILL</p>
                          </div>
                          <div className="lg">
                              <p>Here Are Some of My Skills</p>
                          </div>
                      </div>
                      <div className="skill_list">
                          <div className="rotate">
                              <h2>SKILL</h2>
                          </div>
                          <div className="skill_list_text_box">
                              <div className="skill_list_text">
                                  <h3>{t("skill.title1")}</h3>
                              <ul>
                                  <li>{t("skill.list1.text1")}</li> 
                                  <li>{t("skill.list1.text2")}</li>
                                  <li>{t("skill.list1.text3")}</li>
                                  <li>{t("skill.list1.text4")}</li>
                              </ul>
                              </div>
                              <div className="skill_list_text">
                                  <h3>{t("skill.title2")}</h3>
                              <ul>
                                  <li>{t("skill.list2.text1")}</li> 
                                  <li>{t("skill.list2.text2")}</li>
                                  <li>{t("skill.list2.text3")}</li>
                              </ul>
                              </div>
                          </div>
                          <div className="skill_list_text_box">
                                <div className="skill_list_text">
                                  <h3>{t("skill.title3")}</h3>
                                    <ul>
                                        <li>{t("skill.list3.text1")}</li> 
                                        <li>{t("skill.list3.text2")}</li>
                                        <li>{t("skill.list3.text3")}</li>
                                        <li>{t("skill.list3.text4")}</li>
                                    </ul>
                                </div>
                              <div className="skill_list_text">
                                  <h3>{t("skill.title4")}</h3>
                              <ul>
                                  <li>{t("skill.list4.text1")}</li> 
                              </ul>
                              </div>
                          </div>
                          <div className="skill_list_text_box">
                          <div className="skill_list_text">
                                  <h3>{t("skill.title5")}</h3>
                              <ul>
                                  <li>{t("skill.list5.text1")}</li> 
                                  <li>{t("skill.list5.text2")}</li>
                                  <li>{t("skill.list5.text3")}</li>
                              </ul>
                              </div>
                              <div className="skill_list_text">
                                  <h3>{t("skill.title6")}</h3>
                              <ul>
                                  <li>{t("skill.list6.text1")}</li> 
                                  <li>{t("skill.list6.text2")}</li>
                              </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="skill_rt">
                      <div className="rt_img">
                        <img src="/image/page/rt.png" alt="" />
                      </div>
                  </div>
              </div>
          </section>
          <section className="portfolio">
              <h2 className="portfolio_text sec_txt">
                  Portfolio
              </h2>
              <div className="portfolio_container">
                  <div className="portfolio_title">
                      <div className="sm">
                          <p>PORTFOLIO</p>
                      </div>
                      <div className="lg">
                          <p>My Project</p>
                      </div>
                  </div>
                  <div className="rotate">
                      <h2>Portfolio</h2>
                  </div>
                <ul className="portfolio_wrap">
                    <li className='portfolio_list'>
                        <div class="portfolio_list_img">
                            <img src="/image/page/daejongsang.png" alt="대종상" />
                            <div class="hover-box">
                                <div class="portfolio_link">
                                    <a href="https://github.com/wunhui/daejongsang">
                                        Git site
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio_list_text">
                            <p>
                                첫 제작 웹사이트인 대종상 영화제입니다.<br/>
                                대종상 영화제를 리디자인 하여 만들었습니다.<br/>
                            </p>
                        </div>
                    </li>
                    <li className='portfolio_list'>
                        <div class="portfolio_list_img">
                            <img src="/image/page/elyfi.png" alt="엘리파이" />
                            <div class="hover-box">
                                <div class="portfolio_link">
                                    <a href="https://wunhui.github.io/elyfi_publising/">
                                        Git site
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio_list_text">
                            <p>
                                클론코딩으로 제작한 엘리파이 사이트입니다.    
                            </p>
                        </div>
                    </li>
                    <li className='portfolio_list'>
                        <div class="portfolio_list_img">
                            <img src="/image/page/art.png" alt="국립현대미술관" />
                            <div class="hover-box">
                                <div class="portfolio_link">
                                    <a href="https://github.com/wunhui/art-react">
                                        Git site
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio_list_text">
                            <p>
                                리액트를 사용하여 클론코딩한<br/>웹사이트인 국립현대미술관 입니다.
                            </p>
                        </div>
                    </li>
                    <li className='portfolio_list'>
                        <div class="portfolio_list_img">
                            <img src="/image/page/goldendisc.png" alt="골든디스크어워즈" />
                            <div class="hover-box">
                                <div class="portfolio_link">
                                    <a href="https://github.com/wunhui/GoldenDiscAwardRe">
                                        Git site
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio_list_text">
                            <p>
                                개인 프로젝트인 골든디스크어워즈 입니다.<br/>
                                react-next를 사용하였습니다.
                            </p>
                        </div>
                    </li>
                    <li className='portfolio_list'>
                        <div class="portfolio_list_img">
                            <img src="/image/page/wantu.png" alt="원하냥" />
                            <div class="hover-box">
                                <div class="portfolio_link">
                                    <a href="/">
                                        Git site
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio_list_text">
                            <p>
                                Vue3를 사용하여 만든 본사 프로젝트입니다.<br/>
                                intro 페이지를 제작했으며 다국어까지 맡아서 진행했습니다.<br/>
                                현재 사이트가 없습니다.
                            </p>
                        </div>
                    </li>
                    <li className='portfolio_list'>
                        <div class="portfolio_list_img">
                            <img src="/image/page/lina.png" alt="라이나생명" />
                            <div class="hover-box">
                                <div class="portfolio_link">
                                    <a href="https://www.lina.co.kr/">
                                        Git site
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio_list_text">
                            <p>
                                Vue2를 사용하여 만든<br/>
                                라이나생명대고객채널재구축 적응형웹 사이트 입니다.<br/>
                                22.06.27 ~ 23.06.16 동안 맡은 프로젝트 입니다.
                            </p>
                        </div>
                    </li>
                    <li className='portfolio_list'>
                        <div class="portfolio_list_img">
                            <img src="/image/page/freeiveService.png" alt="프리아이브 홈페이지 서비스" />
                            <div class="hover-box">
                                <div class="portfolio_link">
                                    <a href="https://www.lina.co.kr/">
                                        Git site
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio_list_text">
                            <p>
                                Vue3를 사용하여 만든 회사 홈페이지 입니다.<br/>
                                서비스영역을 맡았으며 1일 소요하여 만들었습니다.
                            </p>
                        </div>
                    </li>
                    <li className='portfolio_list'>
                        <div class="portfolio_list_img">
                            <img src="/image/page/freeiveService.png" alt="준비중" />
                            <div class="hover-box">
                                <div class="portfolio_link">
                                    <a href="https://www.lina.co.kr/">
                                        준비중
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio_list_text">
                            <p>
                                React - next를 이용한 현대백화점 클론코딩
                            </p>
                        </div>
                    </li>
                    <li className='portfolio_list last'>
                        <div class="portfolio_list_text">
                            <p>
                                그외 어드민 사이트
                            </p>
                            <p>
                                KT ds Q-drive _ 22.5.27 ~ 6.22
                            </p>
                            <p>
                                카카오 브레인 _ 23.6.28 ~ 7.21
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
          </section>
    </div>
  )
}
