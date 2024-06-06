namespace Server.Entities;

public class Product
{
    public ProductImage Image { get; set; }
    public string Category { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public ProductPrice Price { get; set; }
}

public class ProductImage
{
    public string Sm { get; set; }
    public string? Md { get; set; }
    public string? Lg { get; set; }
}

public class ProductPrice
{
    public double Old { get; set; }
    public double New { get; set; }
}