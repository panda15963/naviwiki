import style from '../../styles/footer.module.scss'
export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_message}>합리적인 분들과 좋은 컨텐츠가 지속될 수 있는 선순환 시스템을 지향합니다</div>
      <div className={style.footer_contact}>컨택: dream@fun-coding.org</div>
      <div className={style.footer_copyright}>Copyright 2023 All ⓒ rights reserved</div>
    </footer>
  );
}
