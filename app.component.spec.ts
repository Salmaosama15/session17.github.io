import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts() {
    // Replace with your actual API endpoint
    return this.http.get<Product[]>('api/products');
  }

  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }

  // ... other methods for search, filter, etc.
}
export class CartService {
  private cartItems: CartItem[] = [];

  constructor() {
    // Check for existing cart data in local storage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
    }
  }

  addToCart(product: Product) {
    // ... logic to add or update product in cart
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  // ... other cart methods (remove, update quantity, etc.)
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'productapp' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('weatherappf');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, productapp'
    );
  });
});
