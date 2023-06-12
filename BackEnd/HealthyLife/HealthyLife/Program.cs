using HealthyLife.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var connectionString = builder.Configuration.GetConnectionString("connection");
builder.Services.AddControllers();
builder.Services.AddDbContext<DataContext>(items => items.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//enable single domain, multiple domain , any domain (giving access to the other server)
builder.Services.AddCors(p => p.AddPolicy("corspolicy", build =>
{

    build.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors("corspolicy");

app.Run();
