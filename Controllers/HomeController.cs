using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
public class HomeController : Controller
{
    public IActionResult Index()
    {
        List<Product> products = GetProducts(); //! Ürünleri buradan alırı
        return View(products);
    }

    public IActionResult Payment(int id)
    {

        //! Seçilen ürünü burada alabilir ve ödeme sayfasına yönlendirir
        return View();
    }
    public IActionResult PaymentComplete()
    { //! Ödeme noktasına yönlendirir
        return View();
    }
   
    private List<Product> GetProducts()
    {
        //! Örnek ürünlerin listesini döndüren bir metot.
        return new List<Product>
        {
            new Product { Id = 1, Name = "250 BYM Kontör", Price = 936.00m},
            new Product { Id = 2, Name = "500 BYM Kontör", Price = 1497.60m},
            new Product { Id = 3, Name = "2.500 BYM Kontör", Price = 5990.40m },
            new Product { Id = 4, Name = "5.000 BYM Kontör", Price = 9584.40m },
            new Product { Id = 6, Name = "12.500 BYM Kontör", Price = 17971.20m},
            new Product { Id = 7, Name = "25.000 BYM Kontör", Price = 26956.80m},
            new Product { Id = 8, Name = "50.000 BYM Kontör", Price = 48522.00m},
            new Product { Id = 9, Name = "100.000 BYM Kontör", Price = 87339.40m},
            new Product { Id = 9, Name = "200.000 BYM Kontör", Price = 157212.00m }

        };
    }
}