import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

export interface HeaderComponentArgs {
  pageLinks: pageLinks[];
  iconsList: iconsList[];
}

export interface pageLinks {
  label: string;
  path: string;
}

export interface iconsList {
  name: string;
  tooltip: string;
}

export interface imageLogo {
  src: string;
  alt: string;
}

@Component({
  selector: 'syncron-sdk-components-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSticky = false;
  isHidden = false;
  private lastScroll = 0;

  @Input() imageLogo?: imageLogo;
  @Input() iconsList?: iconsList[] = [];
  @Input() pageLinks?: pageLinks[] = [];
  @Output() tabLinkClick = new EventEmitter<string>();

  @ViewChild('container', { static: true }) container!: ElementRef;

  @HostListener('window: scroll', ['$event'])
  checkScroll() {
    let currentScrollPosition =
      window.scrollY || document.documentElement.scrollTop;

    if (currentScrollPosition === 0) {
      this.container.nativeElement.style.position = 'static';
      this.isSticky = false;
    } else if (this.lastScroll > currentScrollPosition) {
      this.container.nativeElement.style.position = 'sticky';
      this.container.nativeElement.style.top = '-60px';
      this.isSticky = true;
    } else if (
      this.lastScroll < currentScrollPosition &&
      currentScrollPosition !== 0
    ) {
      this.container.nativeElement.style.position = 'fixed';
      this.container.nativeElement.style.top = '-100px';
    }
    this.lastScroll = currentScrollPosition;
  }

  onNavItemClick(path: string) {
    this.tabLinkClick.emit(path);
  }
}
